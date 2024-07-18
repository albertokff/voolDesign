<template>
  <div
    class="fundoGradiente"
    style="height:100vh;width:100vw;"
  >
    <div class="row">
      <div class="col-md-6 mt-10">
        <div>
          <i class="fa-brands fa-dropbox fa-2xl mr-5" style="color: #000000;font-size:50px;margin-left:30px;" />
          <a class="navbar-brand" href="#">
            <span style="font-weight: 900;font-size:30px;color:black;">
              VoolDesign
            </span>
          </a>
          <p class="text-black" style="margin-left:90px;">Baixe seu arquivo facilmente.</p>
        </div>
      </div>
      <div class="col-md-6" style="display:flex;justify-content: end;align-items: center;padding-right:70px;">
        <span class="mt-10 mr-10 text-black">Planos</span>
        <router-link to="/sign-in" class="text-primary text-decoration-none mt-10 mr-10" style="color:black !important;">
          <i class="fa-solid fa-user" style="color: #000000;"></i>&nbsp;&nbsp;Login
        </router-link>
        <button class="btn mt-10" style="background-color: yellow;border:2px solid black !important;">
          <router-link to="/sign-up" class="text-primary text-decoration-none" style="color:black !important;background-color: yellow;">
            Começar
          </router-link>
        </button>  
      </div>
    </div>
    <div class="row">
      <div class="col-md-6" style="margin-top:250px;text-align: center;">        
          <span class="text-black" style="font-size:50px;font-weight: 900;">Precisando de um <br> Download?</span><br>        
          <span class="text-black" style="font-size:14px;">O VoolDesign foi projetado para tornar o trabalho de designers e agências mais fácil.</span><br>                  
          <button class="btn mt-10" style="background-color: black;border:2px solid black !important;">
            <router-link to="/sign-up" class="text-primary text-decoration-none" style="color:white !important;background-color: black;">
              Começar
            </router-link>
          </button>       
      </div>
      <div class="col-md-6" style="display: flex;flex-wrap: wrap;margin-top:200px">
        <div class="row">
          <div class="col-md-12">
            <i class="fa-solid fa-film text-black" style="font-size:200px"></i>
          </div>                
          <div class="col-md-12">
            <i class="fa-solid fa-square-caret-right text-black" style="font-size:200px"></i>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <i class="fa-solid fa-image fa-2xl text-black" style="font-size:200px"></i>
          </div>
          <div class="col-md-12">
            <i class="fa-solid fa-file fa-2xl text-black" style="font-size:200px"></i>        
          </div>
        </div>              
      </div>
    </div>
    <div class="row" style="display:flex;text-align:center;justify-content: center;margin-top:100px;">
      <div class="col-md-2">
        <span class="text-black">Velocidade e<br> Segurança</span>  
      </div>
      <div class="col-md-2">
        <span class="text-black">Flexibilidade e<br> Agilidade</span>  
      </div>
      <div class="col-md-2">
        <span class="text-black">Melhor<br> Colaboração</span>  
      </div>
    </div>
  </div>
</template>

<style>
.fundoGradiente {
background: rgb(144,168,254);
background: linear-gradient(180deg, rgba(144,168,254,1) 0%, rgba(235,255,0,1) 100%);
}
</style>