import { UserDataService } from './../../Shared/Services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { IUserCard } from 'src/app/Shared/Interfaces/user-card.interface';
import { ErrorMessages } from 'src/app/Shared/enum/error-messages.enum';

@Component({
  selector: 'app-user-finder',
  templateUrl: './user-finder.component.html',
  styleUrls: ['./user-finder.component.css'],
  providers: [UserDataService]
})
export class UserFinderComponent implements OnInit {

  searchedProfile: string | undefined;
  userProfile: IUserCard.UserInfo | undefined | null;
  errorMessage: string | undefined | null;

  constructor(
    private readonly userDataService: UserDataService
  ) { }

  ngOnInit(): void {
  }

  findGitHubUser(){
    this.reset();
    const validInput: boolean = this.validateForm();
    if(this.searchedProfile && validInput){
      this.userDataService.getGithubUserData(this.searchedProfile).subscribe((response)=>{
        this.userProfile = response;
      })
    }
  }

  validateForm(): boolean{
    if(!this.searchedProfile){
      this.errorMessage = ErrorMessages.User.EmptyInput;
      return false;
    }
    if(this.searchedProfile && this.searchedProfile.length < 3){
      this.errorMessage = ErrorMessages.User.ShortInput
      return false;
    }
    return true;
  }

  reset(){
    this.errorMessage = null;
    this.userProfile = null;
  }
}
