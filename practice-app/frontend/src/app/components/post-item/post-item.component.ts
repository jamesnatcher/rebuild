import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  @Output() onDeletePost: EventEmitter<Post> = new EventEmitter();
  @Output() voteUpPost: EventEmitter<Post> = new EventEmitter();
  @Output() voteDownPost: EventEmitter<Post> = new EventEmitter();

  constructor() { }
 
  ngOnInit(): void {

  }

  onDelete(post: any){
    this.onDeletePost.emit(post);
    console.log(post);
  }

  voteDown(post: any) {
    this.voteDownPost.emit(post);
    post.dislikes += 1;
    console.log(post);
  }
  voteUp(post: any) {
    this.voteUpPost.emit(post);
    post.likes += 1;
    console.log(post);
  }

  onEdit(post: any) {

  }

}
