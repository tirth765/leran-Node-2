const url = require('url');

console.log(url.parse('https://www.amazon.in/Noise-Launched-Bluetooth-Calling-Tracking/dp/B0BJ72WZQ7/ref=sr_1_4 dib=eyJ2IjoiMSJ9 9MLfbgbeHptLr6npyoCTAyYs0-QVJh9mObyL_Orgfa2bhF0DcJj1_ZOEgQ5DJ6bh4uCJXVgr-52MFwU4PHwfRlSuRjLSpazMIKfytJi6Q4wzhTfkFJpmWqa0yE-Xv-iYa4fXQKC5OodhoK698H6dRakp3_WVH0ZyJgY8xeuVuouSDtiM7QfaF0xwgDiG2yRfVKuZekWxHLT2NWGCsWY4AzmVLOuf3RPwk2y-V1dUPoL1TariOrraqJf33hW7rCtdZZj0CHAkQ9WBNU2bdjhcrXjbpBeqXwrY41mFOv5uVTy906zKbUShEQsUeii4SiqKQuld82n1OjCHXJiAKrKHWtraU5Yhep0YOiP07D-IbuY.imYCIC6l-ZQ6ZQaYkTnC8SEpto5AsNnauLjkKogHqVg&dib_tag=se&keywords=watch&qid=1737516527&s=electronics&sr=1-4', true));

const obj = {
    protocol: 'https:',
    host: 'www.Tirth.in',
}    

console.log(url.format(obj));

console.log(url.resolve('https://www.Tirth.in', '/about/6521'));
