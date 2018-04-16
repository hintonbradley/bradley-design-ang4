import { Component, OnInit, Input } from '@angular/core';
import {CommentsService} from '../../services/comments.service';

@Component({
	selector: 'app-comments',
	templateUrl: './comments.component.html',
	styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit {
	@Input() id: string;
	allComments: any;

	constructor(private commentsService: CommentsService) {}

	ngOnInit() {
		this.commentsService.getComments().subscribe(cmts => {
			this.allComments = cmts;
		})
	}

}
