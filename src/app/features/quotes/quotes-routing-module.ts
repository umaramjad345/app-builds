import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteList } from './quote-list/quote-list';
import { QuoteDetail } from './quote-detail/quote-detail';
import { Layout } from '../../shared/layout/layout';

const routes: Routes = [
  {
    path: '', component: Layout, children: [
      { path: '', component: QuoteList },
      { path: ':quoteId', component: QuoteDetail }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesRoutingModule { }
