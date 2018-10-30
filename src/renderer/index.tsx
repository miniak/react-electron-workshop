// electron
import { remote, clipboard, nativeImage } from 'electron';

// node
import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

// react
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IGalleryItemProps {
    filePath: string;
}

class GalleryItem extends React.Component<IGalleryItemProps> {
    constructor(props: IGalleryItemProps) {
        super(props);

        this._onContextMenu = this._onContextMenu.bind(this);
    }

    public render() {
        return (
            <img src={this._fileUrl} onContextMenu={this._onContextMenu} />
        );
    }

    private _onContextMenu(event: React.MouseEvent) {
        event.preventDefault();
        const window = remote.getCurrentWindow();

        const menu = remote.Menu.buildFromTemplate([
            {
                label: 'Show in Folder',
                click: () => {
                    try {
                        remote.shell.showItemInFolder(this.props.filePath);
                    }
                    catch (error) {
                        console.error(error);
                    }
                }
            },
            {
                label: 'Copy to Clipboard',
                click: () => {
                    try {
                        const image = nativeImage.createFromPath(this.props.filePath);
                        clipboard.writeImage(image);
                    }
                    catch (error) {
                        console.error(error);
                    }
                }
            }
        ]);

        menu.popup({ window });
    }

    private get _fileUrl() {
        return url.format({
            protocol: 'file',
            pathname: this.props.filePath,
        });
    }
}

interface IGalleryProps {
    dirPath: string;
}

const kImageFilesPattern = /\.(jpg|png|gif)/i;

class Gallery extends React.Component<IGalleryProps> {
    public render() {
        const dirPath = this.props.dirPath;
        const files = fs.readdirSync(dirPath).filter(file => file.match(kImageFilesPattern));

        return (<>
            <h1>{dirPath}</h1>
            <div>
                {files.map((file) => (
                    <GalleryItem key={file} filePath={path.join(dirPath, file)} />
                ))}
            </div>
        </>);
    }
}

interface IAppState {
    dirPath: string;
}

class App extends React.Component<{}, IAppState> {
    constructor(props) {
        super(props);

        this.state = {
            dirPath: remote.app.getPath('pictures')
        }

        this._selectDirectory = this._selectDirectory.bind(this);
    }

    public render() {
        return (<>
            <button onClick={this._selectDirectory}>Select Directory</button>
            <Gallery dirPath={this.state.dirPath} />
        </>);
    }

    private _selectDirectory() {
        const window = remote.getCurrentWindow();
        remote.dialog.showOpenDialog(window, {
            defaultPath: this.state.dirPath,
            properties: ['openDirectory']
        }, (filePaths) => {
            if (!filePaths) return;
            this.setState({
                dirPath: filePaths[0]
            });
        });
    }
}

function render() {
    ReactDOM.render(<App/>, document.getElementById('root'));
}

document.addEventListener('DOMContentLoaded', render, { once: true });
