const now = new Date();
const year = now.getFullYear();
const hours = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
const minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
const seconds = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
const datestring = `${now.toLocaleString('default', { month: 'short' })}  ${now.getDate()} ${hours}:${minutes}`;
const dateStringLogon = `${now.toLocaleDateString('default', { weekday: 'short' })} ${now.toLocaleString('default', { month: 'short' })}  ${now.getDate()} ${hours}:${minutes}:${seconds} ${year}`;