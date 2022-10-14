const nftData = [
    {
        nftId: 1,
        image: true,
        url: 'https://img.seadn.io/files/359ac32dac8de0225f0159b3d7284dc5.png?fit=max&w=1000',
        colors: 'yellowgreen',
        itemName: 'Lofi Lofts #2575',
        creator: 'LofiLofts',
        price: 279.99,
        availability: 'no',
        nearby: 'yes',
        onlyAtDicks: true,
        newItem: false,
    },
    {
        nftId: 1,
        image: true,
        url: 'https://i.pinimg.com/736x/10/d2/31/10d2313d6f321909c93b61c332371d0a.jpg',
        colors: 'yellowgreen',
        itemName: 'Mad Rabbits Riot Club',
        creator: 'Mad Rabbits',
        price: 279.99,
        availability: 'no',
        nearby: 'yes',
        onlyAtDicks: true,
        newItem: false,
    },
    {
        nftId: 2,
        image: true,
        url: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/05/merlin_184196631_939fb22d-b909-4205-99d9-b464fb961d32-superJumbo.jpeg?auto=format&q=60&fit=max&w=930',
        colors: 'deepskyblue',
        itemName: 'Everydays — The First 5000 Days',
        creator: 'Unknown',
        price: 249.99,
        availability: 'limited',
        nearby: 'no',
        onlyAtDicks: false,
        newItem: true
    },
    {
        nftId: 2,
        image: true,
        url: 'https://i.seadn.io/gae/poF40KemmQv6kZ-WO5Cn1GfXCkpmPS6ixKT_7OyRo7Pf3lCb_0UbPbKS-WslhCXWuo791j9C9-7wADhcAFwk4W5oHhEJjksFRcIwYA?auto=format&w=1000',
        colors: 'deepskyblue',
        itemName: 'CavemanNFT #3861',
        creator: 'Official CavemanNFT',
        price: 249.99,
        availability: 'limited',
        nearby: 'no',
        onlyAtDicks: false,
        newItem: true
    },
    {
        nftId: 3,
        image: true,
        url: 'https://i.seadn.io/gae/xmkQQPzlmseUidS_45toc47a1F7GUfRZnXYmmus7HyROgDFDlDdp7GQ1Ts6rliq3I4shy20vh76wXI4RkovZh34mEAUA_cml2OIcXQ?auto=format&w=750',
        colors: 'deepskyblue',
        itemName: 'Billionaire Bunny #22',
        creator: 'BillionaireBunnyClub',
        price: 299.99,
        availability: 'yes',
        nearby: "maybe",
        onlyAtDicks: true,
        newItem: false
    },
    {
        nftId: 3,
        image: true,
        url: 'https://i.seadn.io/gae/-RYfUcYrV4bUy5WYjz_kE7AxzYEgwXl49wOe5JgNcS5aHRnIJm2irvpd1gcNKozMrN7k-TV9ctxTi1cd1BFG3GP11JxehNEK79XUdA?auto=format&w=1000',
        colors: 'deepskyblue',
        itemName: 'Second Skin #1111',
        creator: 'ALTAVA Second Skin Metamorphosis',
        price: 159.99,
        availability: 'yes',
        nearby: "maybe",
        onlyAtDicks: false,
        newItem: true
    },
    {
        nftId: 3,
        image: true,
        url: 'https://img.seadn.io/files/bb5b35bfe08637aa99ad6ed3e2ac74b9.png?fit=max&w=1000',
        colors: 'deepskyblue',
        itemName: 'GENUINE UNDEAD #1318',
        creator: 'Genuine Undead',
        price: 159.99,
        availability: 'yes',
        nearby: "maybe",
        onlyAtDicks: false,
        newItem: true
    },
    {
        nftId: 1,
        image: true,
        url: 'https://i.seadn.io/gae/7WtgMuv7MDwDKkl52GgV7s1hURVDcanpdjzVOvHeIgo_oXcUJO9C-LCpnbw91c0jsc4DDLie6sV9c9QDFnGukLIuhezop0ZEjfES-ZY?auto=format&w=1000',
        colors: 'yellowgreen',
        itemName: 'Astro Empire',
        creator: 'Space Hoops',
        price: 279.99,
        availability: 'no',
        nearby: 'yes',
        onlyAtDicks: true,
        newItem: false,
    },
    {
        nftId: 1,
        image: true,
        url: 'https://i.seadn.io/gae/NXIsHFtQMfRhfnARLKb1RbTT2r64te0kbhlySaCLmVYy6ihasNV9fWl_cQX1dlc-ouu5YbJ54-YUQHaslgMU5GCEeogPGaRv-_DCxfc?auto=format&w=1000',
        colors: 'yellowgreen',
        itemName: 'JellyDawgs #6675',
        creator: 'JellyDawgs',
        price: 279.99,
        availability: 'no',
        nearby: 'yes',
        onlyAtDicks: true,
        newItem: false,
    },
    {
        nftId: 2,
        image: true,
        url: 'https://i.seadn.io/gae/7hIKYv6J16h8lp1q5ASKgunBa7dxfGvRfzpMulbg9gqDERA16vdZ2WtBlTGm38-wXgHDcjCWY7zjfCaKedsarjZQ_T-zT715r0C9tm8?auto=format&w=1000',
        colors: 'yellowgreen',
        itemName: 'Liftoff',
        creator: 'Space Hoops',
        price: 279.99,
        availability: 'yes',
        nearby: 'yes',
        onlyAtDicks: false,
        newItem: true,
    },
    {
        nftId: 1,
        image: true,
        url: 'https://i.seadn.io/gae/hgR1rnY2xDluGxL5rlPNaBBNMIezzWBkwArRgfKFwjABMSnk1lvluYfQdKVTE70YQhDqXA7eEdGRvi6JFwNpcrGsQe9M7d4QFdAc4w?auto=format&w=1000',
        colors: 'yellowgreen',
        itemName: 'Billionaire Bunny #65',
        creator: 'BillionaireBunnyClub',
        price: 279.99,
        availability: 'no',
        nearby: 'yes',
        onlyAtDicks: true,
        newItem: false,
    },
    {
        nftId: 2,
        image: true,
        url: 'https://img.seadn.io/files/d8bca7d2a1826459d5f23dd84205ebc2.png?fit=max&w=1000',
        colors: 'deepskyblue',
        itemName: 'Fidenza #149',
        creator: 'Fidenza by Tyler Hobbs',
        price: 249.99,
        availability: 'limited',
        nearby: 'no',
        onlyAtDicks: false,
        newItem: true
    },

]

export default nftData;