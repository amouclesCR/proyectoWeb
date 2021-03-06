import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Review } from 'src/app/interfaces/index';
import { PermissionService, ReviewsService, AlertService } from 'src/app/services/index';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  admin: boolean;
  base: boolean;
  block: boolean;
  @Input() owner: boolean;
  @Input() reviewInput: Review;
  @Output() addReviewAnswer = new EventEmitter<Review>();
  constructor(private perm: PermissionService, private review: ReviewsService, private sAlert: AlertService) {}

  ngOnInit() {
     //this.owner = this.perm.duenno;
     this.block = this.reviewInput.blocked;
  }

  deleteRevi(rev: number){
    
    this.review.deleteReview(this.reviewInput.id)
    this.sAlert.successInfoAlert("Se elimino la reseña correctamente");
  }

  answerReview(){
    this.addReviewAnswer.emit(this.reviewInput);
  }

  blocked() {
    this.reviewInput.blocked = !this.reviewInput.blocked;
  }

}
