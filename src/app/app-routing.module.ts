import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroCategoriaComponent } from './features/cadastro-categoria/cadastro-categoria.component';
import { CadastroContasPagarComponent } from './features/cadastro-contas-pagar/cadastro-contas-pagar.component';
import { CadastroContasReceberComponent } from './features/cadastro-contas-receber/cadastro-contas-receber.component';
import { CadastroFornecedorComponent } from './features/cadastro-fornecedor/cadastro-fornecedor.component';
import { CadastroPessoaComponent } from './features/cadastro-pessoa/cadastro-pessoa.component';

const routes: Routes = [

  {path: 'person', component: CadastroPessoaComponent},
  {path: '', component: CadastroContasPagarComponent},
  {path: '', component: CadastroContasReceberComponent},
  {path: '', component: CadastroCategoriaComponent},
  {path: '', component: CadastroFornecedorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
