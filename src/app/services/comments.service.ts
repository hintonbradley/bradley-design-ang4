import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()
export class CommentsService {
	comments: FirebaseListObservable<any[]>;

	constructor(private db:AngularFireDatabase) { }

	getComments() {
		this.comments = this.db.list('/comments') as FirebaseListObservable<any[]>;
		return this.comments;
	}

}
