import { Routes } from '@angular/router';
import { Stage1Component } from './stage1/stage1.component';
import { Stage2Component } from './stage2/stage2.component';
import { Stage3Component } from './stage3/stage3.component';
import { Stage4Component } from './stage4/stage4.component';
import { Stage5Component } from './stage5/stage5.component';
import { Stage6Component } from './stage6/stage6.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/stage1', pathMatch: 'full' },
    {path: 'stage1', component: Stage1Component},
    {path: 'stage2', component: Stage2Component},
    {path: 'stage3', component: Stage3Component},
    {path: 'stage4', component: Stage4Component},
    {path: 'stage5', component: Stage5Component},
    {path: 'stage6', component: Stage6Component}
];
