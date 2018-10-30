// electron
import { remote } from 'electron';

// node
import * as url from 'url';

// react
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// other
import { ExifImage } from 'exif';

interface IExifViewerProps {
    value: Object | string;
}

class ExifViewer extends React.Component<IExifViewerProps> {
    public render() {
        if (typeof this.props.value === 'object') {
            return (
                <ul>
                    {Object.keys(this.props.value).map(key => {
                        return <li>
                            <strong>{key}</strong>:
                            <ExifViewer key={key} value={this.props.value[key]} />
                        </li>;
                    })}
                </ul>
            );
        } else {
            return <>{this.props.value}</>;
        }
    }
}

interface IAppProps {
    filePath: string;
    error?: Error;
    exifData?: Object;
}

class App extends React.Component<IAppProps> {
    constructor(props: IAppProps) {
        super(props);

        this._onClose = this._onClose.bind(this);
    }

    public render() {
        return (<>
            {
                process.platform === 'darwin'
                    ? <button onClick={this._onClose}>Close</button>
                    : <></>
            }
            <h1>{this.props.filePath}</h1>
            {
                this.props.error
                    ? <h2>{`${this.props.error}`}</h2>
                    : <ExifViewer value={this.props.exifData} />
            }
        </>);
    }

    private _onClose() {
        const window = remote.getCurrentWindow();
        window.close();
    }
}

function getExifData(filePath: string): Promise<Object> {
    return new Promise((resolve, reject) => {
        new ExifImage({ image: filePath }, (error, exifData) => {
            if (error) {
                reject(error);
            } else {
                resolve(exifData);
            }
        });
    });
}

async function getApp() {
    const parsedURL = url.parse(location.href, true);
    const filePath = parsedURL.query['filePath'] as string;

    try {
        return <App filePath={filePath} exifData={await getExifData(filePath)} />
    }
    catch (error) {
        return <App filePath={filePath} error={error} />
    }
}

async function render() {
    ReactDOM.render(await getApp(), document.getElementById('root'));
}

document.addEventListener('DOMContentLoaded', render, { once: true });
