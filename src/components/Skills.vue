<template>
  <div class="hello">
    <!-- 
      1. ცვლადის მნიშვნელობის წამოღება
    {{name}}

    2.  თუ btnState ცვლადი არის true, მაშინ დაიწერება პირველი ტექსტი, თუ არაა მეორე
    {{btnState ? 'The button is disabled' : 'The button is active'}}

    3. ბათონის დაკლიკებისას გამოვიძახებთ ფუნქციას "changeName" და ასევე 
    ბათონი არ იქნება დაკლიკვადი/იქნება disabled თუ btnState ცვლადი არის true
    <button v-on:click="changeName" v-bind:disabled="btnState">Change Name</button>-->

    <div class="holder">
      <!-- 4. for ციკლით data და index-ით გადავუვლიკთ skills მასივს და დავაბრუნებთ 
      index-ს და data.skill-ის მნიშნველობას (ამეებს ჩავწერთ li tag-ში)-->
      <!-- <ul>
        <li v-for="(data, index) in skills" :key='index'>{{index}}. {{data.skill}}</li>
      </ul>-->

      <!-- 5. თუ skills მასივის სიგრძე 1-ზე მეტია დააბრუნებს v-if პირობის ტექსტს, თუ არაა v-else პირობის ტექსტს -->
      <!-- <p v-if="skills.length >1">You have more than 1 skills</p>
      <p v-else> You have less than or equal to 1 skill</p>-->

      <!-- 6. div-ს დაედება კლასები alert და another-class, 
      თუ showAlert და showClass ცვლადების მნიშვნელობა არის true-->
      <!-- <div v-bind:class="{ alert : showAlert, 'another-class' : showClass}"></div> -->

      <!-- 7. div-ს დაედება კლასები alert, თუ alertObject-ში ჩაწერილი alert იქნება true -->
      <!-- <div v-bind:class="alertObject"></div> -->

      <!-- 8. div-ის ინლაინ გასტილვა შეგვიძლია შემდეგნაირადაც,
      სადაც სადაც bgColor, bgWidth, და  bgHeight ცვლადების სახელებია-->
      <!-- <div v-bind:style="{backgroundColor: bgColor, width: bgWidth, height: bgHeight}"></div> -->

      <!-- 10. Submit-ზე (enter-ზე) დარეფრეშების გარეშე(prevent) გამოიძახებს ფუნქციას addSkill -->
      <form @submit.prevent="addSkill">
        <!-- 9.რასაც ჩავწერთ ამ Input-ში , ჩაიწერება skill ცვლადშიც, რადგან v-model=”skill”-ს -->
        <!-- ძველი მეთოდი -->
         <!-- <input type="text" placeholder="Enter a skill you have.." v-model="skill" v-validate="'min:5'" name="skill" /> -->
        <!-- <p class="alert" v-if="errors.has('skill')"> {{ errors.first('skill') }}</p> -->
        
        <!-- ახალი მეთოდი -->
        <!-- უნდა ჩასვა ამ ტაგებში და რულებში ეწერება რაც გინდოდა v-validate აღარ მუშაობს განახლებულზე, ძველი ვერსია კი არ აქვთ -->
        <ValidationProvider rules="min:4" v-slot="{ errors }">
            <input type="text" placeholder="Enter a skill you have.." v-model="skill" name="skill">
          <!-- 11. Vue ანიმაციებისთვის ვიყენებთ თეგს transition0ს. იმ შემთხვევაში თუ ვიყენებთ ბიბლიოთკას, 
          მაგ: animate.css -ს enter-active-class-ითა და leave-active-class-ით დავადებთ ამ ბიბლიოთეკის კლასებს -->
            <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
            <p class="alert">{{ errors[0] }}</p>
            </transition>
        </ValidationProvider>


        <!-- <p class="alert" v-if="errors.has('skill')"> {{ errors.first('skill') }}</p> -->

        <!-- 12. როცა მოპწიჩკული არ იქნება, checked ცვლადი დააბრუნებს false-ს, როცა მოპწიჭკული იქნეა true-ს -->
        <!-- <input type="checkbox" id="checkbox"  v-model="checked"> -->
      </form>

      <ul>
        <!-- 13. ანიმაცია ლისტებისთვის ვიყენებთ transition-group -->
         <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
        <li v-for="(data, index) in skills" :key="index">
          {{data.skill}}
          <!-- წაშლა -->
          <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
          </li>
         </transition-group>
      </ul>
      <p>There are the skills that you possess</p>
    </div>
  </div>
</template>

<script>
//vee-validate ლოკალურ კომპოონენტში შემოტანა (რატომღაც გლობალურზე ურევ ალბათ ბაგი აქვთ)
import { ValidationProvider } from 'vee-validate';
//ესს rules რომ დაამატო
import { extend } from 'vee-validate';
// აქ წერ რა პირობა გინდა (ცოდა ზედმეტი დავიდარება მგონია ეს ახალი ვერსია)
extend('min', value => {
  return value.length >= 3;
});

export default {
  // checked: false,
  name: "Skills",
  //  დარეგისტრირება ValidationProvider
  components: {
    ValidationProvider,
  },
  data() {
    return {
      // name: 'Coursetro',
      // btnState: true,
      skill: null,
      skills: [{ skill: "Vue.js" }, { skill: "front-end developer" }]
      // showAlert: true,
      // showClass: true

      // alertObject: {
      //   alert: true
      // }
      // bgColor: 'yellow',
      // bgWidth: '100%',
      // bgHeight: '30px'
    }
  },
  methods: {
    addSkill() {
      this.skills.push({skill: this.skill})
      this.skill = '';
    },
    remove(id) {
      this.skills.splice(id,1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* შემოვიტანოთ ანიმაციებისთვის ბიბლიოთეკა animate.css */
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css";
/* font-awesome აიქონებისთვის შემოვიტანოთ ბიბლიოთეკა */
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";


/* .alert{
    background-color: yellow;
    width: 100%;
    height: 30px;
  }
  .another-class{
    border: 10px solid black;
  } */

.holder {
  background: #fff;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}

input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}

.alert{
  background-color: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  width: 100%;
  margin-top: -20px;
}

.alert-in-enter-active{
  animation: bounce-in .5s;
}
.alert-in-leave-active{
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0%{
    transform: scale(0);
  }
   50%{
    transform: scale(1.5);
  }
   100%{
    transform: scale(1);
  }
}

i{
  float: right;
  cursor: pointer;
}
</style>

<!-- <style src="./Skills.css" scoped></style> -->

