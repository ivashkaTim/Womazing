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

<script>
import Form from "@/components/UI/Form";
import Title from "@/components/UI/Title";
import CheckoutTable from "@/components/blanks/CheckoutTable";
import {mapGetters} from "vuex";
import Radio from "@/components/UI/Radio";
import Button from "@/components/UI/Button";
import Logo from "@/components/UI/Logo";

export default {
  props: {},
  data() {
    return {
      forms: {
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
        },

      },
      tableTitles: ['Товар', 'Кол-во', 'Размер', 'Цвет', 'Всего',],
      radio: {
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
      },
      activeRadio: 1,
    }
  },
  methods: {
    validateForm() {
      let isError = false
      Object.entries(this.forms).forEach(([formName, formFields]) => {
        Object.entries(formFields.fields).forEach(([fieldName, field]) => {
          if (!(field.regExp.test(field.value))) {
            field.error = true
            isError = true
          }
        })
      })
      return isError
    },

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
      }


    },
    changeActiveRadio(id) {
      this.activeRadio = id
    }
  },
  computed: {
    ...mapGetters({
      items: "cart/items",
      cost: 'cart/cost',
      discountCost: 'cart/discountCost',
    }),

  },
  components: {
    Logo,
    'title-component': Title,
    'form-component': Form,
    'table-total-component': CheckoutTable,
    'radio-component': Radio,
    'button-component': Button
  },
}
</script>
