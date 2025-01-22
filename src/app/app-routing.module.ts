import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)},
  {path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)},
  {path: 'alerts', loadChildren: () => import('./modules/alerts/alerts.module').then(m => m.AlertsModule)},
  {path: 'calibration', loadChildren: () => import('./modules/calibration/calibration.module').then(m => m.CalibrationModule)},
  {path: 'control', loadChildren: () => import('./modules/control/control.module').then(m => m.ControlModule)},
  {path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'monitoring', loadChildren: () => import('./modules/monitoring/monitoring.module').then(m => m.MonitoringModule)},
  {path: 'operating-procedures', loadChildren: () => import('./modules/operating-procedures/operating-procedures.module').then(m => m.OperatingProceduresModule)},
  {path: 'register', loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule)},
  {path: 'reports', loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule)},
  {path: 'settings', loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)},
  {path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
