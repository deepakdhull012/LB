import { NgModule } from '@angular/core';
import { SmartDatePipe } from './smart-date-pipe';
import { RelativeDatePipe } from './relative-date-pipe';

@NgModule({
	declarations: [SmartDatePipe,RelativeDatePipe],
	imports: [],
	exports: [SmartDatePipe,RelativeDatePipe]
})
export class PipesModule {}
