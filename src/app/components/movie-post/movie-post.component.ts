import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movies.interfaces';

@Component({
  selector: 'app-movie-post',
  templateUrl: './movie-post.component.html',
  styleUrls: ['./movie-post.component.scss']
})
export class MoviePostComponent implements OnInit {
  @Input() movie:Movie = {id: '', title: ''};
  constructor() { }

  ngOnInit(): void {
  }

}
