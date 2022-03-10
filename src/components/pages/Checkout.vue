<template lang="pug">
  section.b-checkout
    .container.__container
      title-component.__title Оформление заказа
      .__wrapper
        .__left
          form-component.__form(
            v-for="form in forms"
            :title="form.title"
            :fields.sync="form.fields"
          )
        .__right
          h4.__subtitle Ваш заказ
          table-total-component.__table(
            :tableTitles="tableTitles"
            :items="items"
            :cost="cost"
            :discountCost="discountCost"
          )
          h4.__subtitle Способ оплаты
          radio-component.__radio(
            :items="radio"
            :activeRadio="activeRadio"
            @click="changeActiveRadio"
          )
          .__buttons
            button-component(
              class="primary"
              size="l"
              @click="sendForm"
            ) Разместить заказ


</template>

<script lang="ts">

import Form from "@/components/UI/Form.vue";
import Title from "@/components/UI/Title.vue";
import CheckoutTable from "@/components/blanks/CheckoutTable.vue";
import Radio from "@/components/UI/Radio.vue";
import Button from "@/components/UI/Button.vue";

import {Component, Vue} from "vue-property-decorator";
import {Action, Getter} from "@/decorators";
import {CartProduct} from "@/store/modules/cart/mutations";
import {Field} from "@/types/components/UI/Form";
import {ActionCartClearItems} from "@/store/modules/cart/actions";

@Component({
  components: {
    'title-component': Title,
    'form-component': Form,
    'table-total-component': CheckoutTable,
    'radio-component': Radio,
    'button-component': Button
  },
})
export default class Checkout extends Vue {

  @Action('cart/clearItems') clearItems!:ActionCartClearItems

  @Getter("cart/items") items!: CartProduct[]
  @Getter("cart/cost") cost!: number
  @Getter("cart/discountCost") discountCost!: number

  forms = {
    personalData: {
      title: 'Данные покупателя',
      fields: {
        name: {
          type: 'text',
          placeholder: 'Имя',
          value: '',
          error: false,
          regExp: /^([a-zа-яё]+[\s]{0,1}[a-zа-яё]+[\s]{0,1}[a-zа-яё]+)$/,
        },
        mail: {
          type: 'mail',
          placeholder: 'E-mail',
          value: '',
          error: false,
          regExp: /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/,
        },
        phone: {
          type: 'number',
          placeholder: 'Телефон',
          value: '',
          error: false,
          regExp: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
        },
      },
    },
    address: {
      title: 'Адресс получателя',
      fields: {
        country: {
          type: 'text',
          placeholder: 'Страна',
          value: '',
          error: false,
          regExp: /[а-яА-Яa-zA-Z0-9_-]{3,}/,
        },
        city: {
          type: 'text',
          placeholder: 'Город',
          value: '',
          error: false,
          regExp: /[а-яА-Яa-zA-Z0-9_-]{3,}/,
        },
        street: {
          type: 'text',
          placeholder: 'Улица',
          value: '',
          error: false,
          regExp: /[а-яА-Яa-zA-Z0-9_-]{3,}/,
        },
        home: {
          type: 'text',
          placeholder: 'Дом',
          value: '',
          error: false,
          regExp: /[а-яА-Яa-zA-Z0-9_-]{3,}/,
        },
        flat: {
          type: 'text',
          placeholder: 'Квартира',
          value: '',
          error: false,
          regExp: /[а-яА-Яa-zA-Z0-9_-]{3,}/,
        },
      },
    }
  }

  tableTitles = ['Товар', 'Кол-во', 'Размер', 'Цвет', 'Всего',]

  radio = {
    cash: {
      type: 'radio',
      text: 'Оплата наличными',
      name: 'payment',
      value: 1
    },
    card: {
      type: 'radio',
      text: 'Оплата картой',
      name: 'payment',
      value: 2
    },
  }

  activeRadio = 1

  changeActiveRadio(id: number) {
    this.activeRadio = id
  }

  updateField(callback: (field: Field) => void) {
    Object.entries(this.forms).forEach(([formName, formFields]) => {
      Object.entries(formFields.fields).forEach(([fieldName, field]) => {
        callback(field)
      })
    })
  }

  validateForm() {
    let isError = false
    this.updateField(field => {
      if (!(field.regExp.test(field.value))) {
        field.error = true
        isError = true
      }
    })
    return isError
  }

  clearValue() {
    this.updateField(field => {
      field.value = ''
    })

  }

  sendForm() {
    const isError = this.validateForm()
    const form = {
      products: this.items,
      data: {
        name: this.forms.personalData.fields.name.value,
        mail: this.forms.personalData.fields.mail.value,
        phone: this.forms.personalData.fields.phone.value,
      },
      address: {
        country: this.forms.address.fields.country.value,
        city: this.forms.address.fields.city.value,
        street: this.forms.address.fields.street.value,
        home: this.forms.address.fields.home.value,
        flat: this.forms.address.fields.flat.value,
      },
      payMethod: this.activeRadio
    }
    if (!isError) {
      console.log(form)
      this.clearValue()
      this.clearItems()

    }
  }
}

</script>
