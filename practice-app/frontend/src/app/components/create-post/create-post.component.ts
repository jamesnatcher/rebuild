import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Post } from 'src/app/Post';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  @Output() onAddPost: EventEmitter<Post> = new EventEmitter();

  title!: string;
  body!: string;
  imageurl!: string;
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService:UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  toggleCreatePost(){
    console.log("Toggle")
    this.uiService.toggleAddTask();
  }

  onSubmit(){
    if (!this.title){
      alert("Please add a title!");
      return; 
    }
    
    const newPost = {
      title: this.title,
      body: this.body,
      image_url: this.imageurl,
      likes: 0,
      dislikes: 0,
      commentscount: 0

    }

    console.log(newPost);

    this.onAddPost.emit(newPost);

    this.title = '';
    this.body = '';
    this.imageurl = '';
  }

}

