
export default function getTime(endtime){
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor( (t/1000) % 60 );
  let minutes = Math.floor( (t/1000/60) % 60 );
  let hours = Math.floor( (t/(1000*60*60)) % 24 );
  let days = Math.floor( t/(1000*60*60*24) );
  if (t < 1000) {
    return {
     'total': t,
     'days': 0,
     'hours': 0,
     'minutes': 0,
     'seconds': 0
    };
  }
  else {
    return {
     'total': t,
     'days': days,
     'hours': hours,
     'minutes': minutes,
     'seconds': seconds
    };
  }
}

