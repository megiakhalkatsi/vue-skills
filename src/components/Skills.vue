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
        <!-- უნდა ჩასვა ამ ტაგებში და რულებში ეწერება რაც გინდოდა v-validate აღარ მუშაობს განახლებულზე, ძველი ვერსია კი არ აქვთ -->
        <ValidationProvider rules="min:4" v-slot="{ errors }">
            <input type="text" v-model="skill">
            <span>{{ errors[0] }}</span>
        </ValidationProvider>


        <!-- <p class="alert" v-if="errors.has('skill')"> {{ errors.first('skill') }}</p> -->

        <!-- 11. როცა მოპწიჩკული არ იქნება, checked ცვლადი დააბრუნებს false-ს, როცა მოპწიჭკული იქნეა true-ს -->
        <!-- <input type="checkbox" id="checkbox"  v-model="checked"> -->
      </form>

      <ul>
        <li v-for="(data, index) in skills" :key="index">{{data.skill}}</li>
      </ul>
      <p>There are the skills that you possess</p>
    </div>
  </div>
</template>

<script>
//vee-validate ლოკალურ კომპოონენტში შემოტანა (რატომღაც გლობალურზე ურევ ალბათ ბაგი აქვთ)
import { ValidationProvider } from 'vee-validate';
import { extend } from 'vee-validate';

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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>

<!-- <style src="./Skills.css" scoped></style> -->

