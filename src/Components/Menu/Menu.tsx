import React from 'react';
import MenuSection from './MenuSection/MenuSection';
import './Menu.css'

function Menu() {
  const productArray = [
    {
      title: 'Шаурма 4 сыра',
      weight: 390,
      price: 299,
      type: 'Шаурма',
      promo: true,
      imagePath: 'https://s3-alpha-sig.figma.com/img/0262/9d17/642d15db4e22823375bb3f5cc6c1f6d3?Expires=1646611200&Signature=a8t6k1WrzYQzu-E93ety-UDzdxvmpEjn3uRdM71VvpDbsarHSuDaPu2axtp-42nMO43PW9Ev7ULpDTYtBpt50Z3AH3qslo1a4tybBpBYrR649TjIhaW4gDyDN7qQhfprnNumQwDTtEfqOAKteWlV40KhZuDLIVEyjSYEwev~wWvyrAKBqDMaNoRqjCGBw55wg-CVXQ6KcPgu6~rHPCGwMAEuXpZ0PVpMUHdvryZkXfvSL1UwV-mnOVu8QwkwTU0aKgvKyMi6ZcwZIFXEu2VanmOKU4X7wh8i~NFVn0wdvevEAju1izFkEapXdTRh8guf~jgHIHEg42sGeoiArlZR0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      ingredients: [
        {
          ingredTitle: "Сыр  Моцарелла",
          ingredQuantity: 2
        },
        {
          ingredTitle: "Сыр Сулугуни",
          ingredQuantity: 1
        },
        {
          ingredTitle: "Кунжутный соус",
          ingredQuantity: 1
        }
      ]
    },
    {
      title: 'Шаурма вегетарианскаяа',
      weight: 390,
      price: 299,
      type: 'Шаурма',
      promo: false,
      imagePath: 'https://s3-alpha-sig.figma.com/img/2a12/9783/33c61f267b2bcc205da7ae41fea6b539?Expires=1646611200&Signature=ZlVjnIUfcnr0HI3dhpnY7RLl8-RKEitEKNcwaOCioIrY08m~Fqth-Ip-IdJLgDI5-fPS5a9Z~FLkp7OvPgajg8EP46KpvCbZx2zVcxjT8dym--qbnUjtOcJVwZtvqMbul3iHQVbrzvv8MOGI-31oJ8aNzcQevXPUChXb4X7P1ASQcHVjHnbSYLI0vWzSkkcWs4IeNfaN6~~mU2YLPEUCv3Yv91T~xZve3SWF0p6Ms5x~UMjDnbGzdJ8Oe~b29Qpb87h0i8UR9zo7h83SOunBQSzLc13Qh8cb6ZiE5cpqMT6bQjuUsgU48elagBltJhCPST2vuG1jsTe3JOojJAbNhw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      ingredients: [
        {
          ingredTitle: "Сыр  Моцарелла",
          ingredQuantity: 2
        },
        {
          ingredTitle: "Сыр Сулугуни",
          ingredQuantity: 1
        },
        {
          ingredTitle: "Кунжутный соус",
          ingredQuantity: 1
        }
      ]
    },
    {
      title: 'Шаурма 4 сыра',
      weight: 390,
      price: 299,
      type: 'Шаурма',
      promo: true,
      imagePath: 'https://s3-alpha-sig.figma.com/img/0262/9d17/642d15db4e22823375bb3f5cc6c1f6d3?Expires=1646611200&Signature=a8t6k1WrzYQzu-E93ety-UDzdxvmpEjn3uRdM71VvpDbsarHSuDaPu2axtp-42nMO43PW9Ev7ULpDTYtBpt50Z3AH3qslo1a4tybBpBYrR649TjIhaW4gDyDN7qQhfprnNumQwDTtEfqOAKteWlV40KhZuDLIVEyjSYEwev~wWvyrAKBqDMaNoRqjCGBw55wg-CVXQ6KcPgu6~rHPCGwMAEuXpZ0PVpMUHdvryZkXfvSL1UwV-mnOVu8QwkwTU0aKgvKyMi6ZcwZIFXEu2VanmOKU4X7wh8i~NFVn0wdvevEAju1izFkEapXdTRh8guf~jgHIHEg42sGeoiArlZR0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      ingredients: [
        {
          ingredTitle: "Сыр  Моцарелла",
          ingredQuantity: 2
        },
        {
          ingredTitle: "Сыр Сулугуни",
          ingredQuantity: 1
        }
      ]
    },
    {
      title: 'Шаурма вегетарианскаяа',
      weight: 390,
      price: 299,
      type: 'Шаурма',
      promo: false,
      imagePath: 'https://s3-alpha-sig.figma.com/img/2a12/9783/33c61f267b2bcc205da7ae41fea6b539?Expires=1646611200&Signature=ZlVjnIUfcnr0HI3dhpnY7RLl8-RKEitEKNcwaOCioIrY08m~Fqth-Ip-IdJLgDI5-fPS5a9Z~FLkp7OvPgajg8EP46KpvCbZx2zVcxjT8dym--qbnUjtOcJVwZtvqMbul3iHQVbrzvv8MOGI-31oJ8aNzcQevXPUChXb4X7P1ASQcHVjHnbSYLI0vWzSkkcWs4IeNfaN6~~mU2YLPEUCv3Yv91T~xZve3SWF0p6Ms5x~UMjDnbGzdJ8Oe~b29Qpb87h0i8UR9zo7h83SOunBQSzLc13Qh8cb6ZiE5cpqMT6bQjuUsgU48elagBltJhCPST2vuG1jsTe3JOojJAbNhw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      ingredients: [
        {
          ingredTitle: "Кунжутный соус",
          ingredQuantity: 1
        }
      ]
    },
    {
      title: 'Шаурма 4 сыра',
      weight: 390,
      price: 299,
      type: 'Шаурма',
      promo: true,
      imagePath: 'https://s3-alpha-sig.figma.com/img/0262/9d17/642d15db4e22823375bb3f5cc6c1f6d3?Expires=1646611200&Signature=a8t6k1WrzYQzu-E93ety-UDzdxvmpEjn3uRdM71VvpDbsarHSuDaPu2axtp-42nMO43PW9Ev7ULpDTYtBpt50Z3AH3qslo1a4tybBpBYrR649TjIhaW4gDyDN7qQhfprnNumQwDTtEfqOAKteWlV40KhZuDLIVEyjSYEwev~wWvyrAKBqDMaNoRqjCGBw55wg-CVXQ6KcPgu6~rHPCGwMAEuXpZ0PVpMUHdvryZkXfvSL1UwV-mnOVu8QwkwTU0aKgvKyMi6ZcwZIFXEu2VanmOKU4X7wh8i~NFVn0wdvevEAju1izFkEapXdTRh8guf~jgHIHEg42sGeoiArlZR0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      ingredients: [
        {
          ingredTitle: "Сыр  Моцарелла",
          ingredQuantity: 2
        },
        {
          ingredTitle: "Сыр Сулугуни",
          ingredQuantity: 1
        },
        {
          ingredTitle: "Кунжутный соус",
          ingredQuantity: 1
        }
      ]
    },
    {
      title: 'Пепси без сахара',
      weight: 0.33,
      price: 90,
      type: 'Напитки',
      promo: false,
      imagePath: 'https://s3-alpha-sig.figma.com/img/2915/7f38/50e4f7fe2b9ffdb5054c7dca2a8514cf?Expires=1646611200&Signature=J~qSr9Kn9xqJ9OYhWR8GpmrqQF0JDmrhYO-qb25OoIkXwXjpmoYgQpuXscm~bQrSBC7-agF5Ov757Mxa7CGRQEeAZK91lqnbrpz3OYCKv1mfDazy1ySc3v6JFtHujmQFwuLjf5KiP9RLpS2HUPyPqKT1Q~r1HNm-mgz3SziO3dZIJqPI5Qu2RPRmna-T4u9ZGCWvPfWosoQ9w~BjywBT5s40pxFtuz-peaUGDvN833BCBQd9f3-qwWwa5TJsYR6-dNBvk-bYfwVkPc06ZfzcvrjHoeiyNMGluytfhJQxTtoCskF0YOCqFgslHM7P6S6RzlkHQhyz1LpZtE8MJQKvaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      ingredients: null
    },
    {
      title: 'Пепси без сахара',
      weight: 0.33,
      price: 90,
      type: 'Напитки',
      promo: false,
      imagePath: 'https://s3-alpha-sig.figma.com/img/2915/7f38/50e4f7fe2b9ffdb5054c7dca2a8514cf?Expires=1646611200&Signature=J~qSr9Kn9xqJ9OYhWR8GpmrqQF0JDmrhYO-qb25OoIkXwXjpmoYgQpuXscm~bQrSBC7-agF5Ov757Mxa7CGRQEeAZK91lqnbrpz3OYCKv1mfDazy1ySc3v6JFtHujmQFwuLjf5KiP9RLpS2HUPyPqKT1Q~r1HNm-mgz3SziO3dZIJqPI5Qu2RPRmna-T4u9ZGCWvPfWosoQ9w~BjywBT5s40pxFtuz-peaUGDvN833BCBQd9f3-qwWwa5TJsYR6-dNBvk-bYfwVkPc06ZfzcvrjHoeiyNMGluytfhJQxTtoCskF0YOCqFgslHM7P6S6RzlkHQhyz1LpZtE8MJQKvaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      ingredients: null
    },
    {
      title: 'Пепси без сахара',
      weight: 0.33,
      price: 90,
      type: 'Напитки',
      promo: false,
      imagePath: 'https://s3-alpha-sig.figma.com/img/2915/7f38/50e4f7fe2b9ffdb5054c7dca2a8514cf?Expires=1646611200&Signature=J~qSr9Kn9xqJ9OYhWR8GpmrqQF0JDmrhYO-qb25OoIkXwXjpmoYgQpuXscm~bQrSBC7-agF5Ov757Mxa7CGRQEeAZK91lqnbrpz3OYCKv1mfDazy1ySc3v6JFtHujmQFwuLjf5KiP9RLpS2HUPyPqKT1Q~r1HNm-mgz3SziO3dZIJqPI5Qu2RPRmna-T4u9ZGCWvPfWosoQ9w~BjywBT5s40pxFtuz-peaUGDvN833BCBQd9f3-qwWwa5TJsYR6-dNBvk-bYfwVkPc06ZfzcvrjHoeiyNMGluytfhJQxTtoCskF0YOCqFgslHM7P6S6RzlkHQhyz1LpZtE8MJQKvaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      ingredients: null
    },
    {
      title: 'Соус сырный',
      weight: 50,
      price: 50,
      type: 'Соусы',
      promo: false,
      imagePath: 'https://s3-alpha-sig.figma.com/img/4e8f/8c20/59742dd5826e602f4e0822618448a19b?Expires=1646611200&Signature=HTF5M-pbXqSWvL5z12xLU~bQUGGEl8OlO9s~Vq4-91ABfH6rLlC1x2ffE0EIa-pGFAECVzk6KuI8h6np~FIj8uulHI08U2Qo0VdS6Fa3UHq0vj4mwbrPTLHaBnGN7BV3iF4bP6aw702dLwinsr04tvQRmW9hV9b75QFr6ZiPuykKH2NSDtskGv7u-RvOiGVhazWUGvWI0Jx7~Ygj6guiUvABwnSeAOS0T~vA59DI3sD1~uG7GkRKeykRG7lZ6LfVt8YKgcnNTLyyib2ULZh-L~9vg4Bodcj~MOaiEOP1KvMDN0jyed1TkoipYa6ci17q8YPnJdyjiW4hCgQmFYyaSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      ingredients: null
    },
    {
      title: 'Соус сырный',
      weight: 50,
      price: 50,
      type: 'Соусы',
      promo: false,
      imagePath: 'https://s3-alpha-sig.figma.com/img/4e8f/8c20/59742dd5826e602f4e0822618448a19b?Expires=1646611200&Signature=HTF5M-pbXqSWvL5z12xLU~bQUGGEl8OlO9s~Vq4-91ABfH6rLlC1x2ffE0EIa-pGFAECVzk6KuI8h6np~FIj8uulHI08U2Qo0VdS6Fa3UHq0vj4mwbrPTLHaBnGN7BV3iF4bP6aw702dLwinsr04tvQRmW9hV9b75QFr6ZiPuykKH2NSDtskGv7u-RvOiGVhazWUGvWI0Jx7~Ygj6guiUvABwnSeAOS0T~vA59DI3sD1~uG7GkRKeykRG7lZ6LfVt8YKgcnNTLyyib2ULZh-L~9vg4Bodcj~MOaiEOP1KvMDN0jyed1TkoipYa6ci17q8YPnJdyjiW4hCgQmFYyaSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      ingredients: null
    },
    {
      title: 'Соус сырный',
      weight: 50,
      price: 50,
      type: 'Соусы',
      promo: false,
      imagePath: 'https://s3-alpha-sig.figma.com/img/4e8f/8c20/59742dd5826e602f4e0822618448a19b?Expires=1646611200&Signature=HTF5M-pbXqSWvL5z12xLU~bQUGGEl8OlO9s~Vq4-91ABfH6rLlC1x2ffE0EIa-pGFAECVzk6KuI8h6np~FIj8uulHI08U2Qo0VdS6Fa3UHq0vj4mwbrPTLHaBnGN7BV3iF4bP6aw702dLwinsr04tvQRmW9hV9b75QFr6ZiPuykKH2NSDtskGv7u-RvOiGVhazWUGvWI0Jx7~Ygj6guiUvABwnSeAOS0T~vA59DI3sD1~uG7GkRKeykRG7lZ6LfVt8YKgcnNTLyyib2ULZh-L~9vg4Bodcj~MOaiEOP1KvMDN0jyed1TkoipYa6ci17q8YPnJdyjiW4hCgQmFYyaSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      ingredients: null
    }
  ]
  const sections = ["Шаурма", "Напитки", "Соусы"];
  const setSection = sections.map(function(section, index){
    const filterProduct = productArray.filter(type => type.type === section)
    return <>
      <MenuSection key={index} title={section} products={filterProduct}/>
      {(index === (sections.length - 1)) ? null : <hr></hr>}
    </>
  });
  return ( 
    <div className='Menu'>
      <h1>Меню</h1>
      {setSection}
    </div>
  );
}

export default Menu;