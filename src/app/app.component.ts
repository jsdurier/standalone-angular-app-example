import { Component } from '@angular/core';
import { RemoteFileApiConnectorService } from '@jsdurier/remote-file-api-connector';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(
		private readonly _remoteFileApiConnectorService: RemoteFileApiConnectorService
	) { }

	onClick(): void {
		this._remoteFileApiConnectorService.writeFile(
			'', // file path to write
			'content of the file'
		);
	}
}
