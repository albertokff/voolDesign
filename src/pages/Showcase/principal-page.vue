<template>
  <div
    class="fundoGradiente"
    style="height:100%;width:100vw;"
  >
    <div class="row">
      <div class="col-md-6 mt-10" style="display:flex;align-items: center;">        
          <i class="fa-brands fa-dropbox fa-2xl mr-5" style="color: #000000;font-size:50px;margin-left:30px;" />
          <a class="navbar-brand" href="#">
            <span style="font-weight: 900;font-size:30px;color:black;">
              VoolDesign
            </span><br>
            <p class="text-black">Baixe seu arquivo facilmente.</p>        
          </a>
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
    <div class="row mt-10" style="display:flex;text-align:center;justify-content: center;margin-bottom:200px;">
      <div class="col-md-2" style="display:flex;align-items: center;">
        <i class="fa-solid fa-caret-left" style="color: #000000;font-size:50px;" />
        <i class="fa-solid fa-caret-left" style="color: #000000;font-size:50px;" />
        <span class="text-black">
          Velocidade e<br> Segurança</span>  
      </div>
      <div class="col-md-2" style="display:flex;align-items: center;">
        <i class="fa-solid fa-bezier-curve" style="color: #000000;font-size:50px;" />
        <span class="text-black">&nbsp;&nbsp;Flexibilidade e<br> Agilidade</span>  
      </div>
      <div class="col-md-2" style="display:flex;align-items:center;">
        <i class="fa-solid fa-arrows-turn-to-dots" style="color: #000000;font-size:50px;" />
        <span class="text-black">&nbsp;&nbsp;Melhor<br> &nbsp;&nbsp;Colaboração</span>  
      </div>
    </div>
    <div class="row" style="width:100%;background-color: white;height:300px;">
      <div class="col-md-6" style="display:flex;align-items: center;justify-content:center;">
        <h1 style="font-weight: 900;">Com o sistema<br>certo, grandes<br>coisas acontecem.</h1>  
      </div>
      <div class="col-md-6" style="display:flex;align-items:center;justify-content: center;">
        <span style="font-size:24px;">VoolDesign é a solução ideal para designers e<br> profissionais de agências. Baixe seu arquivo<br> facilmente, enviando o link para nosso sistema.</span>
      </div>
    </div>
    <div class="row mt-10" style="display:flex;justify-content: center;">
      <h1 style="margin-left:150px;">O que oferecemos</h1>
    </div>
    <div class="row mt-10 mb-10">
      <div class="col-md-12" style="display:flex;justify-content: center;">
        <i class="fa-solid fa-music" style="color: #000000;font-size:200px;margin-right:150px;" />
        <i class="fa-solid fa-video" style="color: #000000;font-size:200px;margin-right:150px;" />
        <i class="fa-solid fa-file" style="color: #000000;font-size:200px;margin-right:150px;" />
        <i class="fa-solid fa-image" style="color: #000000;font-size:200px;" />
      </div>     
    </div>
    <div class="row">      
      <div class="col-md-6" style="display: flex;flex-wrap: wrap;text-align:center;margin-top:200px;">
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
      <div class="col-md-6" style="display: flex;flex-wrap: wrap;text-align:center;margin-top:200px;">
        <div class="row">          
          <div class="col-md-12">
            <h1>Para designers e para agências,</h1>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <span>VooLdesign é a solução ideal para designers<br> e profissionais de agências, para fazer o download<br> rapidamente e de maneira segura de diversos tipos<br> de arquivos.</span>
          </div>          
        </div>              
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