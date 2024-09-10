import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss'],
})
export class MeComponent implements OnInit {
  public user: User | undefined;

  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.authService.me().subscribe((user: any) => {
      this.user = {
        ...user,
        created_at: new Date(user.createdAt),
        updated_at: new Date(user.updatedAt),
      };
    });
  }

  public back() {
    window.history.back();
  }
}
