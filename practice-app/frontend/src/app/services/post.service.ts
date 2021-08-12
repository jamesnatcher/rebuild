import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post } from '../Post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})   
export class PostService {
  private apiUrl = 'http://localhost:4201'

  constructor(private http:HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl + '/posts');   
  }

  deletePost(post: Post): Observable<Post> {
      const url = `${this.apiUrl}/posts/${post.post_id}`;
      return this.http.delete<Post>(url);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl + '/posts', post);
  }

  voteUp(post: Post) {
    const url = `${this.apiUrl}/posts/voteup/${post.post_id}`;
    return this.http.patch<Post>(url, post);
  }
  voteDown(post: Post) {
    const url = `${this.apiUrl}/posts/votedown/${post.post_id}`;
    return this.http.patch<Post>(url, post);
  }
}