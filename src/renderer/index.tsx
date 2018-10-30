// electron
import { remote } from 'electron';

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
    public render() {
        return (
            <img src={this._fileUrl} />
        );
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

class App extends React.Component {
    public render() {
        return (
            <Gallery dirPath={remote.app.getPath('pictures')} />
        );
    }
}

function render() {
    ReactDOM.render(<App/>, document.getElementById('root'));
}

document.addEventListener('DOMContentLoaded', render, { once: true });
