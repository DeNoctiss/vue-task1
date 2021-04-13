<template>
  <div>
    <form v-if="step===1" @submit.prevent="submitHandler">
      <div class="wrapper">
        <div class="wraper_header">Регистрация</div>
        <div class="wrapper_step">Персональные данные <span>(шаг 1 из 3)</span></div>
        <hr class="wrapper_step-progress1">
        <div class="inputs-wrapper">
          <div class="required-block">
            <label class="label" for="name" >Имя<span>*</span></label>
            <input type="text"
                   name="name"
                   placeholder="Имя..."
                   v-model="firstPage.name"
                   :class="{invalid: ($v.firstPage.name.$dirty && $v.firstPage.name.required), 'error-input': ($v.firstPage.name.$error)}">
            <p class="error"><span v-if="$v.firstPage.name.$error" >Ошибка: Обязательное поле, не менее 2 символов</span></p>
          </div>
          <div class="required-block">
            <label class="label" for="last-name">Фамилия<span>*</span></label>
            <input type="text"
                   name="last-name"
                   placeholder="Фамилия..."
                   v-model="firstPage.lastName"
                   :class="{invalid: ($v.firstPage.lastName.$dirty && $v.firstPage.lastName.required), 'error-input': ($v.firstPage.lastName.$error)}"
            >
            <p class="error"><span v-if="$v.firstPage.lastName.$error" >Ошибка: Обязательное поле, не менее 2 символов</span></p>
          </div>
          <div class="required-block">
            <label class="label" for="otch">Отчество</label>
            <input type="text" name="otch" placeholder="Отчество..." v-model="firstPage.otch">
            <p class="error"></p>
          </div>
          <div class="required-block">
            <label class="label" for="gender">Пол</label>
            <select name="gender" v-model="firstPage.gender">
              <option>Мужской</option>
              <option>Женский</option>
            </select>
            <p class="error"></p>
          </div>
          <div class="required-block">
            <label class="label" for="birthday" >Дата рождения<span>*</span></label>
            <div class="date">
              <input type="number"
                     name="day"
                     placeholder="ДД"
                     v-model="firstPage.day"
                     :class="{invalid: ($v.firstPage.day.$dirty && $v.firstPage.day.required), 'error-input': ($v.firstPage.day.$error)}">
              <input type="number"
                     name="mounth"
                     placeholder="ММ"
                     v-model="firstPage.mounth"
                     :class="{invalid: ($v.firstPage.mounth.$dirty && $v.firstPage.mounth.required), 'error-input': ($v.firstPage.mounth.$error)}">
              <input type="number"
                     name="year"
                     placeholder="ГГГГ"
                     v-model="firstPage.year"
                     :class="{invalid: ($v.firstPage.year.$dirty && $v.firstPage.year.required), 'error-input': ($v.firstPage.year.$error)}">
            </div>
            <p class="error"><span v-if="$v.firstPage.year.$error || $v.firstPage.mounth.$error || $v.firstPage.day.$error" >Ошибка: Обязательные поля, проверьте правильность введенных данных</span></p>
          </div>
          <div class="required-block">
            <label class="label" for="phone" >Номер телефона<span>*</span></label>
            <input type="number"
                   name="phone"
                   placeholder="79371234567"
                   v-model="firstPage.phone"
                   :class="{invalid: ($v.firstPage.phone.$dirty && $v.firstPage.phone.required), 'error-input': ($v.firstPage.phone.$error)}">
            <p class="error"><span v-if="$v.firstPage.phone.$error" >Ошибка: Обязательное поле, телефон начинается с 7</span></p>
          </div>
          <div class="required-block">
            <label class="label" for="group">Группа клиентов<span>*</span></label>
            <select name="group"
                    v-model="firstPage.group"
                    :class="{invalid: ($v.firstPage.group.$dirty && $v.firstPage.group.required), 'error-input': ($v.firstPage.group.$error)}">
              <option>VIP</option>
              <option>Проблемные</option>
              <option>ОМС</option>
            </select>
            <p class="error"><span v-if="$v.firstPage.group.$error" >Ошибка: Обязательное поле</span></p>
          </div>
          <div class="required-block">
            <label class="label" for="gender">Лечащий врач</label>
            <select name="gender" v-model="firstPage.doctor">
              <option>Иванов</option>
              <option>Захаров</option>
              <option>Чернышева</option>
            </select>
            <p class="error"></p>
          </div>
          <div class="check">
            <label class="label" for="sms">Не отправлять СМС</label>
            <input type="checkbox" name="checkbox" v-model="firstPage.sms">
          </div>
          <div class="button-conteiner">
            <div></div>
            <button class="next" type="submit" >Следующий шаг</button>
          </div>

        </div>
      </div>
    </form>
    <form v-if="step===2" @submit.prevent="submitHandler">
      <div class="wrapper">
        <div class="wraper_header">Регистрация</div>
        <div class="wrapper_step">Место проживания <span>(шаг 2 из 3)</span></div>
        <hr class="wrapper_step-progress2">
        <div class="inputs-wrapper">
          <div class="required-block">
            <label class="label" for="country" >Страна</label>
            <input type="text"
                   name="country"
                   placeholder="Страна..."
                   v-model="secondPage.country">
            <p class="error"></p>
          </div>
          <div class="required-block">
            <label class="label" for="area" >Область</label>
            <input type="text"
                   name="area"
                   placeholder="Область..."
                   v-model="secondPage.area">
            <p class="error"></p>
          </div>
          <div class="required-block">
            <label class="label" for="city" >Город<span>*</span></label>
            <input type="text"
                   name="city"
                   placeholder="Город..."
                   v-model="secondPage.city"
                   :class="{invalid: ($v.secondPage.city.$dirty && $v.secondPage.city.required), 'error-input': ($v.secondPage.city.$error)}">
            <p class="error"><span v-if="$v.secondPage.city.$error" >Ошибка: Обязательное поле, не менее 3 символов</span></p>
          </div>
          <div class="required-block">
            <label class="label" for="street" >Улица</label>
            <input type="text"
                   name="street"
                   placeholder="Улица..."
                   v-model="secondPage.street">
            <p class="error"></p>
          </div>
          <div class="required-block">
            <label class="label" for="house" >Дом</label>
            <input type="text"
                   name="house"
                   placeholder="Дом..."
                   v-model="secondPage.house">
            <p class="error"></p>
          </div>
          <div class="required-block">
            <label class="label" for="index" >Индекс</label>
            <input type="text"
                   name="index"
                   placeholder="Индекс..."
                   v-model="secondPage.index">
            <p class="error"></p>
          </div>
          <div class="button-conteiner">
            <button class="back" @click="stepBack">Предыдущий шаг</button>
            <button class="next" type="submit">Следующий шаг</button>
          </div>
        </div>
      </div>
    </form>
    <form v-if="step===3" @submit.prevent="submitHandler">
      <div class="wrapper">
        <div class="wraper_header">Регистрация</div>
        <div class="wrapper_step">Паспортные данные <span>(шаг 3 из 3)</span></div>
        <hr class="wrapper_step-progress3">
        <div class="inputs-wrapper">
          <div class="required-block">
            <label class="label" for="doc">Тип Документа<span>*</span></label>
            <select name="doc"
                    v-model="thirdPage.doc"
                    :class="{invalid: ($v.thirdPage.doc.$dirty && $v.thirdPage.doc.required), 'error-input': ($v.thirdPage.doc.$error)}">
              <option>Паспорт</option>
              <option>Свидетельство о рождении</option>
              <option>Водительские права</option>
            </select>
            <p class="error"><span v-if="$v.thirdPage.doc.$error" >Ошибка: Обязательное поле</span></p>
          </div>
          <div class="required-block">
            <label class="label" for="birthday" >Дата выдачи<span>*</span></label>
            <div class="date">
              <input type="number"
                     name="day"
                     placeholder="ДД"
                     v-model="thirdPage.day"
                     :class="{invalid: ($v.thirdPage.day.$dirty && $v.thirdPage.day.required), 'error-input': ($v.thirdPage.day.$error)}">
              <input type="number"
                     name="mounth"
                     placeholder="ММ"
                     v-model="thirdPage.mounth"
                     :class="{invalid: ($v.thirdPage.mounth.$dirty && $v.thirdPage.mounth.required), 'error-input': ($v.thirdPage.mounth.$error)}">
              <input type="number"
                     name="year"
                     placeholder="ГГГГ"
                     v-model="thirdPage.year"
                     :class="{invalid: ($v.thirdPage.year.$dirty && $v.thirdPage.year.required), 'error-input': ($v.thirdPage.year.$error)}">
            </div>
            <p class="error"><span v-if="$v.thirdPage.year.$error || $v.thirdPage.mounth.$error || $v.thirdPage.day.$error" >Ошибка: Обязательные поля, проверьте правильность введенных данных</span></p>
          </div>
          <div class="required-block">
            <label class="label" for="serial">Серия</label>
            <input type="number" name="serial" placeholder="Серия..." v-model="thirdPage.serial">
            <p class="error"></p>
          </div>
          <div class="required-block">
            <label class="label" for="num">Номер</label>
            <input type="number" name="num" placeholder="Номер..." v-model="thirdPage.num">
            <p class="error"></p>
          </div>
          <div class="required-block">
            <label class="label" for="from">Кем выдан</label>
            <input type="text" name="from" placeholder="Кем выдан..." v-model="thirdPage.from">
            <p class="error"></p>
          </div>
          <div class="button-conteiner">
            <button class="back" @click="stepBack">Предыдущий шаг</button>
            <button class="next" type="submit">Завершить</button>
          </div>
        </div>
      </div>
    </form>
    <div v-if="step===4" class="final">
      <h1>Регистрация прошла успешно!</h1>
    </div>
  </div>

</template>

<script>
import {required, minLength, maxLength, maxValue, minValue} from 'vuelidate/lib/validators'

export default {
  data(){
    return {
      step: 1,
      firstPage:{
        name: '',
        lastName: '',
        otch: '',
        gender: '',
        day: '',
        mounth: '',
        year: '',
        phone: '',
        group: '',
        doctor: '',
        sms: true
      },
      secondPage:{
        country: '',
        area: '',
        city: '',
        street: '',
        house: '',
        index: ''
      },
      thirdPage:{
        doc: '',
        serial: '',
        num: '',
        from: '',
        day: '',
        mounth: '',
        year: ''
      }
    }
  },
  validations:{
    firstPage:{
      name: {
        required,
        minLength: minLength(2)
      },
      lastName: {
        required,
        minLength: minLength(2)
      },
      day: {
        required,
        maxValue: maxValue(31),
        minValue: minValue(1)
      },
      mounth: {
        required,
        maxValue: maxValue(12),
        minValue: minValue(1)
      },
      year: {
        required,
        maxValue: maxValue(2021),
        minValue: minValue(1930)
      },
      phone: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
        isPhone(value) {
          return value[0]==='7'
        }
      },
      group: {
        required
      }
    },
    secondPage: {
      city: {
        required,
        minLength: minLength(3)
      }
    },
    thirdPage:{
      doc: {
        required
      },
      day: {
        required,
        maxValue: maxValue(31),
        minValue: minValue(1)
      },
      mounth: {
        required,
        maxValue: maxValue(12),
        minValue: minValue(1)
      },
      year: {
        required,
        maxValue: maxValue(2021),
        minValue: minValue(1930)
      }
    }
  },
  methods:{
    firstPageCheck(){
      console.log(this.sms)

    },
    submitHandler(){
      if(this.step===1){
        if (this.$v.firstPage.$invalid){
          this.$v.firstPage.$touch()
          return
        }
      }
      else if(this.step===2){
        if (this.$v.secondPage.$invalid){
          this.$v.secondPage.$touch()
          return
        }
      }
      else {
        if (this.$v.thirdPage.$invalid){
          this.$v.thirdPage.$touch()
          return
        }
      }

      this.step++
    },
    stepBack(){
      this.step--
    }
  }
}
</script>

<style lang="sass">
  form
    width: 800px
    height: 800px
    margin: auto
    margin-top: 50px
    background: #FFFFFF
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.13)
    border-radius: 20px
  .wrapper
    width: 720px
    height: 700px
    float: left
    margin-top: 20px
    margin-left: 40px
  .wraper_header
    font-family: Montserrat
    font-style: normal
    font-weight: bold
    font-size: 36px
    line-height: 44px
    text-align: center
  .wrapper_step
    font-family: Montserrat
    font-style: normal
    font-weight: bold
    font-size: 24px
    line-height: 29px
    margin-top: 30px
    text-align: center
    span
      color: #B8B8B8

  .wrapper_step-progress1
    height: 5px
    background: linear-gradient(to right, #40AEEC 33%, #B8B8B8 33%)
    margin-top: 15px

  .wrapper_step-progress2
    height: 5px
    background: linear-gradient(to right, #40AEEC 66%, #B8B8B8 66%)
    margin-top: 15px

  .wrapper_step-progress3
    height: 5px
    background-color: #40AEEC
    margin-top: 15px

  .inputs-wrapper
    width: 100%
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: space-between
    margin-top: 5px
    .required-block
      height: 116px
      margin-top: 15px
    .group
      margin-top: 0px
    .check
      display: flex
      flex-direction: row
      height: 30px
      align-items: center
      margin-top: 15px
    .button-conteiner
      width: 100%
      flex-direction: row
      margin-top: 15px
      div
        width: 250px
    div
      width: 350px
      display: flex
      flex-direction: column
      justify-content: space-between
      .label
        width: 100%
        height: 25px
        font-family: Montserrat
        font-style: normal
        font-weight: normal
        font-size: 18px
        line-height: 22px
        float: left
        span
          color: #F14646
      .date
        display: flex
        flex-direction: row
        height: 50px
        margin-top: 5px



  input
    margin-top: 5px
    width: 344px
    height: 46px
    border-style: solid
    border-width: 1px
    border-color: #B8B8B8
    border-radius: 5px
    font-family: Montserrat
    font-style: normal
    font-weight: normal
    font-size: 18px
    line-height: 22px

  input[name="day"], input[name="mounth"]
    width: 74px
    height: 46px
    margin-top: 0px

  input[name="year"]
    width: 144px
    height: 46px
    margin-top: 0px

  select
    width: 350px
    height: 50px
    border-width: 1px
    border-color: #B8B8B8
    background-color: white
    border-radius: 5px
    font-family: Montserrat
    font-style: normal
    font-weight: normal
    font-size: 18px
    line-height: 22px

  label[for="sms"]
    width: 190px
    font-family: Montserrat
    font-style: normal
    font-weight: normal
    font-size: 18px
    margin-top: 5px

  input[name="checkbox"]
    width: 25px
    height: 25px

  .next
    width: 200px
    height: 50px
    background-color: #40AEEC
    color: white
    font-family: Montserrat
    font-style: normal
    font-weight: normal
    font-size: 18px
    line-height: 22px
    border-radius: 10px
    outline: none
    border: 0

  .back
    width: 200px
    height: 50px
    background-color: #fff
    color: black
    font-family: Montserrat
    font-style: normal
    font-weight: normal
    font-size: 18px
    line-height: 22px
    border-radius: 10px
    border: solid 1px #B8B8B8

  .next:hover
    background-color: #1376a8
    cursor: pointer
  .back:hover
    background-color: #40AEEC
    cursor: pointer
    color: white

  .error
    margin-top: 0
    height: 15px
    font-family: Montserrat
    font-style: normal
    font-weight: normal
    font-size: 12px
    color: #F14646

  .error-input
    border-color: #F14646
    color: #F14646

  input[type="number"]
    -moz-appearance: textfield
    -webkit-appearance: textfield
    appearance: textfield


  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button
    display: none

  .final
    width: 800px
    height: 50px
    margin: auto
    margin-top: 100px
    background: #FFFFFF
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.13)
    border-radius: 20px
    text-align: center
    font-family: Montserrat
    font-style: normal
    font-weight: bold
    margin-top: 400px
    h1
      line-height: 50px

  @media screen and (max-width: 890px)
    form
      margin: auto
      width: 600px

    .wrapper
      width: 550px
      margin: 20px

    input
      width: 244px

    input[name="day"],input[name="mount"]
      width: 40px

    input[name="year"]
      width: 80px

    .inputs-wrapper
      div
        width: 250px

    select
      width: 250px

    .final
      width: 100%


  @media screen and (max-width: 660px)
    form
      margin: 0
      width: 100%
      height: 1330px

    .wrapper
      width: 90%
      margin: 20px
    .wraper_header
      font-size: 28px
    .wrapper_step
      margin-top: 0px
      font-size: 18px

    .inputs-wrapper
      justify-content: center

    .final
      margin-top: 300px
      h1
       font-size: 14px

  @media screen and (max-width: 300px)
    form
      margin: 0
      width: 100%
      height: 900px

    .wrapper
      width: 90%
      margin: 5px
    .wraper_header
      font-size: 28px
    .wrapper_step
      margin-top: 0px
      font-size: 18px

    .inputs-wrapper
      justify-content: center

    .label
      font-size: 14px

    input
      width: 194px
      height: 30px
      font-size: 14px

    input[name="mounth"], input[name="day"]
      width: 30px
      height: 30px

    input[name="year"]
      width: 60px
      height: 30px


    .inputs-wrapper
      div
        width: 200px
        height: 80px
        .label
          font-size: 14px
      .required-block
        margin-top: 0px
        height: 80px
      .not-required-block
        height: 50px
        margin-top: 10px

    select
      width: 200px
      height: 30px

    .error
      font-size: 8px

    .next
      width: 100px
      height: 45px
      font-size: 12px

    .back
      width: 100px
      height: 45px
      font-size: 12px

    .final
      margin-top: 300px
      h1
        font-size: 12px

</style>