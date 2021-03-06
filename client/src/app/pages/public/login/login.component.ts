import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../../common/services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  messageClass;
  message;
  processing = false;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.createForm();
   }

  createForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  disableForm() {
    this.form.controls['username'].disable();
    this.form.controls['password'].disable();
  }

  enableForm() {
    this.form.controls['username'].enable();
    this.form.controls['password'].enable();
  }



  ngOnInit() {
  }

  public onLoginSubmit() : void {
    // this.processing = true;
    // this.disableForm();

    const user = {
      username: this.form.get('username').value,
      password: this.form.get('password').value
    }

    this.authService.login(user).subscribe((data) => {
      if (data && !data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
        // this.processing = false;
        // this.enableForm();
      } else {
        this.messageClass = 'alert alert-success';
        this.message = data.message;
        this.authService.storeUserData(data.token, data.user);
        this.route.queryParams.subscribe((queryParam: any) =>
          {
            var navUrl = queryParam["redirectUrl"] ? queryParam["redirectUrl"] : '/home';
            this.router.navigate([navUrl]);
          });
      }
    })
  }

}
