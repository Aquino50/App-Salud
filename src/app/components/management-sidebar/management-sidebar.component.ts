import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management-sidebar',
  templateUrl: './management-sidebar.component.html',
  styleUrls: ['./management-sidebar.component.scss']
})
export class ManagementSidebarComponent implements OnInit {

  // Title Sidebar
  title = 'Management';

  constructor() { }

  ngOnInit(): void {
  }


}
