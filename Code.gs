const ADMIN_PASSWORD = "JEMADMIN2026";
const SHEETS = {
  USERS: "Users",
  ORDERS: "Orders",
  MOVIES: "Movies",
  COMING: "ComingSoon",
  SETTINGS: "Settings",
  SESSIONS: "Sessions",
  FOOD: "Food"
};

const DEFAULT_MOVIES = [
  ["infinitywar","Avengers: Infinity War","PG-13","Action • Adventure • Superhero","https://image.tmdb.org/t/p/w780/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg","https://www.youtube.com/watch?v=6ZfuNTqbHE8",["12:00 PM","3:15 PM","6:30 PM","9:45 PM"]],
  ["scarymovie6","Scary Movie 6","R","Comedy • Horror","https://image.tmdb.org/t/p/w780/bqOKJrZFR9KpqWE607dw6KOdKCj.jpg","https://www.youtube.com/watch?v=cGgWAHXuTKc",["11:30 AM","2:45 PM","6:00 PM","9:15 PM"]],
  ["scream","Scream","R","Horror • Mystery • Thriller","https://www.incine.fr/media/affiches_film/big/halloween-la-nuit-des-masques-1373525133-57.jpg","https://www.youtube.com/watch?v=i3J6ACKQ7K0",["1:00 PM","4:00 PM","7:00 PM","10:00 PM"]],
  ["halloween","Halloween","R","Horror • Thriller","https://www.incine.fr/media/affiches_film/big/halloween-la-nuit-des-masques-1373525133-57.jpg","https://www.youtube.com/watch?v=3JsrH8eUVOo",["12:30 PM","3:30 PM","6:45 PM","9:30 PM"]]
];
const DEFAULT_COMING = [
  ["backrooms","The Backrooms","PG-13","Horror • Mystery","https://via.placeholder.com/600x900/171717/e11d2e?text=THE+BACKROOMS"],
  ["spiderman","Spider-Man: Brand New Day","PG-13","Action • Superhero","https://via.placeholder.com/600x900/171717/e11d2e?text=SPIDER-MAN"]
];

const DEFAULT_FOOD = [
  ["large-popcorn","Large Popcorn",6.49,"🍿","Classic JEM movie popcorn.","Snack",JSON.stringify([{name:"Butter",price:0},{name:"Extra Butter",price:0.50}]),false],
  ["xl-popcorn","XL Movie Popcorn",8.49,"🍿","Extra-large popcorn.","Snack",JSON.stringify([{name:"Butter",price:0},{name:"Extra Butter",price:0.75}]),false],
  ["jem-slushie","JEM Slushie",3.49,"🥤","Choose your soda base/flavor.","Drink",JSON.stringify([{name:"Coca-Cola",price:0},{name:"Sprite",price:0},{name:"Fanta Orange",price:0},{name:"Fanta Grape",price:0},{name:"Cherry",price:0},{name:"Blue Raspberry",price:0},{name:"Lime",price:0}]),false],
  ["large-fountain","Large Fountain Drink",3.49,"🥤","Choose your soda.","Drink",JSON.stringify([{name:"Coca-Cola",price:0},{name:"Diet Coke",price:0},{name:"Sprite",price:0},{name:"Dr Pepper",price:0},{name:"Fanta Orange",price:0},{name:"Fanta Grape",price:0},{name:"Root Beer",price:0},{name:"Lemon-Lime",price:0}]),false],
  ["fresh-lemonade","Fresh Lemonade",3.99,"🍋","Fresh movie-night lemonade.","Drink",JSON.stringify([{name:"Classic",price:0},{name:"Strawberry",price:0.50},{name:"Raspberry",price:0.50}]),false],
  ["jem-snack-box","JEM Snack Box",11.99,"🍿","Pick your candy and snack mix.","Box",JSON.stringify([{name:"M&M's",price:0},{name:"Skittles",price:0},{name:"Sour Patch Kids",price:0},{name:"Reese's Pieces",price:0},{name:"Twizzlers",price:0},{name:"Gummy Bears",price:0},{name:"Starburst",price:0},{name:"Mike and Ike",price:0},{name:"Junior Mints",price:0},{name:"Peanut M&M's",price:0.50},{name:"Popcorn",price:0},{name:"Pretzel Bites",price:1},{name:"Nacho Chips",price:1},{name:"Cookie",price:1},{name:"Potato Chips",price:0.75},{name:"Crackers",price:0.50},{name:"Bottled Water",price:1.50}]),false],
  ["jem-nachos","JEM Nachos",5.49,"🧀","Warm nachos with your choice of toppings.","Food",JSON.stringify([{name:"Cheese Sauce",price:0.75},{name:"Jalapeño Cheese",price:0.75},{name:"Jalapeños",price:0.50},{name:"Diced Tomatoes",price:0.50},{name:"Onions",price:0.50},{name:"Black Olives",price:0.50},{name:"Salsa",price:0.50},{name:"Guacamole",price:1}]),false],
  ["jem-pretzel","JEM Pretzel",4.99,"🥨","Warm soft pretzel with your choice of dip.","Snack",JSON.stringify([{name:"Cheese Sauce",price:0.75},{name:"Jalapeño Cheese",price:0.75},{name:"Ranch",price:0.50},{name:"Honey Mustard",price:0.50},{name:"Marinara",price:0.75}]),false],
  ["chicken-tenders","Chicken Tenders",7.49,"🍗","Crispy chicken tenders.","Food",JSON.stringify([{name:"Ranch",price:0.50},{name:"BBQ",price:0.50},{name:"Honey Mustard",price:0.50},{name:"Buffalo",price:0.50}]),false],
  ["bottled-water","Bottled Water",1.99,"💧","Cold bottled water.","Drink","[]",false],
  ["jem-pizza","JEM Pizza",8.99,"🍕","Hot JEM cheese pizza. Customize your toppings.","Food",JSON.stringify([{name:"Extra Cheese",price:1},{name:"Pepperoni",price:1.25},{name:"Sausage",price:1.25},{name:"Mushrooms",price:0.75},{name:"Black Olives",price:0.75},{name:"Green Peppers",price:0.75},{name:"Jalapeños",price:0.75}]),false],
  ["pizza-slice","JEM Pizza Slice",4.49,"🍕","A hot slice for movie night.","Food",JSON.stringify([{name:"Extra Cheese",price:0.50},{name:"Pepperoni",price:0.75},{name:"Sausage",price:0.75},{name:"Jalapeños",price:0.50}]),false],
  ["truffle-popcorn","Truffle Popcorn",12.99,"🍿","Premium truffle popcorn.","Premium","[]",true],
  ["golden-caramel-popcorn","Golden Caramel Popcorn",11.99,"🍿","Premium caramel popcorn.","Premium","[]",true],
  ["premium-fountain","Premium Craft Fountain Drink",6.49,"🥤","Premium craft fountain drink.","Premium",JSON.stringify([{name:"Coca-Cola",price:0},{name:"Sprite",price:0},{name:"Dr Pepper",price:0}]),true],
  ["artisan-chocolate-box","Artisan Chocolate Box",10.99,"🍫","Premium chocolate selection.","Box",JSON.stringify([{name:"M&M's",price:0},{name:"Reese's Pieces",price:0},{name:"Junior Mints",price:0}]),true],
  ["loaded-premium-nachos","Loaded Premium Nachos",10.99,"🧀","Loaded premium nachos.","Premium",JSON.stringify([{name:"Cheese Sauce",price:0.75},{name:"Jalapeños",price:0.50},{name:"Salsa",price:0.50}]),true],
  ["jem-vip-snack-box","JEM VIP Snack Box",17.99,"🍿","The ultimate JEM snack box.","Box",JSON.stringify([{name:"M&M's",price:0},{name:"Skittles",price:0},{name:"Sour Patch Kids",price:0},{name:"Reese's Pieces",price:0},{name:"Twizzlers",price:0},{name:"Gummy Bears",price:0},{name:"Junior Mints",price:0}]),true]
];

function getAdminPassword(){
  const s=ss().getSheetByName(SHEETS.SETTINGS);
  if(!s)return ADMIN_PASSWORD;
  const v=s.getDataRange().getValues();
  for(let i=1;i<v.length;i++)if(String(v[i][0])==="adminPassword"&&String(v[i][1]))return String(v[i][1]);
  return ADMIN_PASSWORD;
}
function setAdminPassword(p){
  const s=ss().getSheetByName(SHEETS.SETTINGS);
  const v=s.getDataRange().getValues();
  for(let i=1;i<v.length;i++)if(String(v[i][0])==="adminPassword"){s.getRange(i+1,2).setValue(p);return;}
  s.appendRow(["adminPassword",p]);
}

function ss(){return SpreadsheetApp.getActiveSpreadsheet();}
function ensureSheet(name,headers){
  let s=ss().getSheetByName(name);
  if(!s)s=ss().insertSheet(name);
  if(s.getLastRow()===0)s.appendRow(headers);
  return s;
}
function setup(){
  ensureSheet(SHEETS.USERS,["UserID","Created","Name","Email","PasswordHash"]);
  ensureSheet(SHEETS.ORDERS,["OrderID","Date","UserID","CustomerName","CustomerEmail","Location","OrderType","Movie","Showtime","Seats","Items","TicketTotal","SnackTotal","Total","Status"]);
  ensureSheet(SHEETS.MOVIES,["ID","Title","Rating","Genre","Poster","Trailer","Times"]);
  ensureSheet(SHEETS.COMING,["ID","Title","Rating","Genre","Poster"]);
  ensureSheet(SHEETS.SETTINGS,["Key","Value"]);
  ensureSheet(SHEETS.SESSIONS,["Token","UserID","Created","Expires"]);
  const food=ensureSheet(SHEETS.FOOD,["ID","Name","Price","Icon","Description","Type","Sauces","Premium"]);
  if(food.getLastRow()===1)DEFAULT_FOOD.forEach(r=>food.appendRow(r));
  seed();
}
function seed(){
  const m=ss().getSheetByName(SHEETS.MOVIES);
  if(m.getLastRow()===1)DEFAULT_MOVIES.forEach(x=>m.appendRow([x[0],x[1],x[2],x[3],x[4],x[5],JSON.stringify(x[6])]));
  const c=ss().getSheetByName(SHEETS.COMING);
  if(c.getLastRow()===1)DEFAULT_COMING.forEach(x=>c.appendRow(x));
  const st=ss().getSheetByName(SHEETS.SETTINGS);
  if(st.getLastRow()===1){st.appendRow(["ticketPrice","12.50"]);st.appendRow(["premiumTicketPrice","19.99"]);st.appendRow(["introVideo","https://www.youtube.com/embed/ScMzIvxBSi4"]);}
}
function doGet(e){
  try{
    setup();
    const a=e.parameter.action||"";
    if(a==="catalog")return jsonp(e,catalog(e));
    if(a==="takenSeats")return jsonp(e,takenSeats(e));
    if(a==="signup")return jsonp(e,{success:false,error:"Use POST for signup."});
    if(a==="login")return jsonp(e,{success:false,error:"Use POST for login."});
    if(a==="myOrders")return jsonp(e,myOrders(e));
    if(a==="adminLogin")return jsonp(e,adminLogin(e));
    if(a==="orders")return jsonp(e,adminOrders(e));
    if(a==="updateStatus")return jsonp(e,updateStatus(e));
    if(a==="changeAdminPassword")return jsonp(e,changeAdminPassword(e.parameter));
    return jsonp(e,{success:false,error:"Unknown action."});
  }catch(err){return jsonp(e,{success:false,error:String(err)})}
}
function doPost(e){
  try{
    setup();
    const data=JSON.parse(e.parameter.data||"{}");
    const a=data.action||"";
    if(a==="signup")return out(signup(data));
    if(a==="login")return out(login(data));
    if(a==="createOrder")return out(createOrder(data));
    if(a==="saveMovie")return out(saveMovie(data));
    if(a==="deleteMovie")return out(deleteMovie(data));
    if(a==="saveComing")return out(saveComing(data));
    if(a==="deleteComing")return out(deleteComing(data));
    if(a==="saveFood")return out(saveFood(data));
    if(a==="deleteFood")return out(deleteFood(data));
    if(a==="changeAdminPassword")return out(changeAdminPassword(data));
    return out({success:false,error:"Unknown POST action."});
  }catch(err){return out({success:false,error:String(err)})}
}
function signup(d){
  const name=String(d.name||"").trim(),email=String(d.email||"").trim().toLowerCase(),pass=String(d.password||"");
  if(!name||!email||pass.length<6)return {success:false,error:"Name, email and a 6+ character password are required."};
  const sh=ss().getSheetByName(SHEETS.USERS),rows=sh.getDataRange().getValues();
  if(rows.slice(1).some(r=>String(r[3]).toLowerCase()===email))return {success:false,error:"An account with that email already exists."};
  const id="U-"+Utilities.getUuid().slice(0,8).toUpperCase(),token=Utilities.getUuid()+Utilities.getUuid();
  sh.appendRow([id,new Date(),name,email,hash(pass)]);
  ss().getSheetByName(SHEETS.SESSIONS).appendRow([token,id,new Date(),new Date(Date.now()+1000*60*60*24*30)]);
  return {success:true,user:{token,name,email}};
}
function login(d){
  const email=String(d.email||"").trim().toLowerCase(),pass=String(d.password||"");
  const rows=ss().getSheetByName(SHEETS.USERS).getDataRange().getValues();
  for(let i=1;i<rows.length;i++)if(String(rows[i][3]).toLowerCase()===email&&String(rows[i][4])===hash(pass)){
    const token=Utilities.getUuid()+Utilities.getUuid(),id=rows[i][0];
    ss().getSheetByName(SHEETS.SESSIONS).appendRow([token,id,new Date(),new Date(Date.now()+1000*60*60*24*30)]);
    return {success:true,user:{token,name:String(rows[i][2]),email}};
  }
  return {success:false,error:"Incorrect email or password."};
}
function userFromToken(token){
  if(!token)return null;
  const s=ss().getSheetByName(SHEETS.SESSIONS),u=ss().getSheetByName(SHEETS.USERS),sr=s.getDataRange().getValues(),now=new Date();
  for(let i=1;i<sr.length;i++)if(String(sr[i][0])===String(token)&&new Date(sr[i][3])>now){
    for(let j=1;j<u.getLastRow();j++){const r=u.getRange(j+1,1,1,5).getValues()[0];if(String(r[0])===String(sr[i][1]))return {id:r[0],name:r[2],email:r[3]};}
  }
  return null;
}
function createOrder(d){
  const u=userFromToken(d.token);if(!u)return {success:false,error:"Please sign in first."};
  const lock=LockService.getScriptLock();lock.waitLock(30000);
  try{
    const orderType=String(d.type||""),movie=String(d.movie||""),time=String(d.time||""),location=String(d.location||"");
    const seats=Array.isArray(d.seats)?d.seats.map(String):[];
    if(orderType.toLowerCase().includes("ticket")&&seats.length){
      const taken=takenInternal(movie,time,location);
      const conflicts=seats.filter(x=>taken.indexOf(x)>=0);
      if(conflicts.length)return {success:false,error:"Some seats were just taken: "+conflicts.join(", ")};
    }
    const id="JEM-"+Date.now().toString().slice(-8)+Math.floor(Math.random()*100);
    const items=Array.isArray(d.items)?d.items:[];
    ss().getSheetByName(SHEETS.ORDERS).appendRow([id,new Date(),u.id,String(d.name||u.name),String(d.email||u.email),location,orderType,movie,time,JSON.stringify(seats),JSON.stringify(items),Number(d.ticketTotal||0),Number(d.snackTotal||0),Number(d.total||0),"NEW"]);
    return {success:true,orderId:id};
  }finally{lock.releaseLock()}
}
function takenSeats(e){const movie=String(e.parameter.movie||""),time=String(e.parameter.time||""),location=String(e.parameter.location||"");if(!movie||!time||!location)return {success:false,error:"Movie, time and location are required."};return {success:true,seats:takenInternal(movie,time,location)}}
function takenInternal(movie,time,location){
  const s=ss().getSheetByName(SHEETS.ORDERS),v=s.getDataRange().getValues(),out=[];
  for(let i=1;i<v.length;i++){if(["CANCELLED","CANCELED"].indexOf(String(v[i][14]).toUpperCase())>=0)continue;if(String(v[i][5])!==location||String(v[i][7])!==movie&&movie!==String(v[i][7]))continue;if(String(v[i][8])!==time)continue;try{JSON.parse(v[i][9]||"[]").forEach(x=>{if(out.indexOf(String(x))<0)out.push(String(x))})}catch(_){}}
  return out;
}
function catalog(e){
  if(String(e.parameter.admin)==="1"&&String(e.parameter.password)!==getAdminPassword())return {success:false,error:"Incorrect admin password."};
  const m=ss().getSheetByName(SHEETS.MOVIES).getDataRange().getValues(),c=ss().getSheetByName(SHEETS.COMING).getDataRange().getValues(),settings=ss().getSheetByName(SHEETS.SETTINGS).getDataRange().getValues(),movies={};
  for(let i=1;i<m.length;i++)movies[m[i][0]]={id:m[i][0],title:m[i][1],rating:m[i][2],genre:m[i][3],poster:m[i][4],trailer:m[i][5],times:parseJson(m[i][6],[])};
  const coming=[];for(let i=1;i<c.length;i++)coming.push({id:c[i][0],title:c[i][1],rating:c[i][2],genre:c[i][3],poster:c[i][4]});
  const st={};settings.slice(1).forEach(r=>st[r[0]]=r[1]);
  const fs=ss().getSheetByName(SHEETS.FOOD),food=[],premiumFood=[];if(fs){const fv=fs.getDataRange().getValues();for(let i=1;i<fv.length;i++){const item={id:fv[i][0],name:fv[i][1],price:Number(fv[i][2]||0),icon:fv[i][3],description:fv[i][4],type:fv[i][5],sauces:parseJson(fv[i][6],[]),premium:String(fv[i][7]).toLowerCase()==="true"};(item.premium?premiumFood:food).push(item)}}return {success:true,movies,comingSoon:coming,food,premiumFood,ticketPrice:Number(st.ticketPrice||12.5),premiumTicketPrice:Number(st.premiumTicketPrice||19.99),introVideo:st.introVideo||""};
}
function myOrders(e){const u=userFromToken(e.parameter.token);if(!u)return {success:false,error:"Session expired. Please sign in again."};const v=ss().getSheetByName(SHEETS.ORDERS).getDataRange().getValues(),out=[];for(let i=v.length-1;i>=1;i--)if(String(v[i][2])===String(u.id))out.push(orderObj(v[i]));return {success:true,orders:out}}
function adminLogin(e){return String(e.parameter.password||"")===getAdminPassword()?{success:true}: {success:false,error:"Incorrect admin password."}}
function adminOrders(e){if(String(e.parameter.password||"")!==getAdminPassword())return {success:false,error:"Incorrect admin password."};const v=ss().getSheetByName(SHEETS.ORDERS).getDataRange().getValues(),out=[];for(let i=v.length-1;i>=1;i--)out.push(orderObj(v[i]));return {success:true,orders:out}}
function updateStatus(e){if(String(e.parameter.password||"")!==getAdminPassword())return {success:false,error:"Incorrect admin password."};const id=String(e.parameter.orderId||""),status=String(e.parameter.status||"").toUpperCase(),allowed=["NEW","CONFIRMED","READY","COMPLETED","CANCELLED"];if(allowed.indexOf(status)<0)return {success:false,error:"Invalid status."};const s=ss().getSheetByName(SHEETS.ORDERS),v=s.getDataRange().getValues();for(let i=1;i<v.length;i++)if(String(v[i][0])===id){s.getRange(i+1,15).setValue(status);return {success:true,status}}return {success:false,error:"Order not found."}}
function saveMovie(d){if(String(d.password||"")!==getAdminPassword())return {success:false,error:"Incorrect admin password."};const s=ss().getSheetByName(SHEETS.MOVIES),v=s.getDataRange().getValues(),m=d.movie||{};for(let i=1;i<v.length;i++)if(String(v[i][0])===String(d.oldId||"")&&String(d.oldId||"")!==String(m.id)){s.deleteRow(i+1);break}for(let i=1;i<v.length;i++)if(String(v[i][0])===String(m.id)){s.getRange(i+1,1,1,7).setValues([[m.id,m.title,m.rating,m.genre,m.poster,m.trailer,JSON.stringify(m.times||[])]]);return {success:true}}s.appendRow([m.id,m.title,m.rating,m.genre,m.poster,m.trailer,JSON.stringify(m.times||[])]);return {success:true}}
function deleteMovie(d){if(String(d.password||"")!==getAdminPassword())return {success:false,error:"Incorrect admin password."};return deleteRowById(SHEETS.MOVIES,d.id)}
function saveComing(d){if(String(d.password||"")!==getAdminPassword())return {success:false,error:"Incorrect admin password."};const s=ss().getSheetByName(SHEETS.COMING),v=s.getDataRange().getValues(),m=d.item||{};for(let i=1;i<v.length;i++)if(String(v[i][0])===String(d.oldId||"")&&String(d.oldId||"")!==String(m.id)){s.deleteRow(i+1);break}for(let i=1;i<v.length;i++)if(String(v[i][0])===String(m.id)){s.getRange(i+1,1,1,5).setValues([[m.id,m.title,m.rating,m.genre,m.poster]]);return {success:true}}s.appendRow([m.id,m.title,m.rating,m.genre,m.poster]);return {success:true}}
function deleteComing(d){if(String(d.password||"")!==getAdminPassword())return {success:false,error:"Incorrect admin password."};return deleteRowById(SHEETS.COMING,d.id)}
function saveFood(d){if(String(d.password||"")!==getAdminPassword())return {success:false,error:"Incorrect admin password."};const s=ss().getSheetByName(SHEETS.FOOD),v=s.getDataRange().getValues(),m=d.item||{};for(let i=1;i<v.length;i++)if(String(v[i][0])===String(d.oldId||"")&&String(d.oldId||"")!==String(m.id)){s.deleteRow(i+1);break}const row=[m.id,m.name,Number(m.price||0),m.icon||"🍿",m.description||"",m.type||"Snack",JSON.stringify(m.sauces||[]),!!m.premium];const v2=s.getDataRange().getValues();for(let i=1;i<v2.length;i++)if(String(v2[i][0])===String(m.id)){s.getRange(i+1,1,1,8).setValues([row]);return {success:true}}s.appendRow(row);return {success:true}}
function deleteFood(d){if(String(d.password||"")!==getAdminPassword())return {success:false,error:"Incorrect admin password."};return deleteRowById(SHEETS.FOOD,d.id)}
function changeAdminPassword(d){if(String(d.password||"")!==getAdminPassword())return {success:false,error:"Current admin password is incorrect."};const np=String(d.newPassword||"");if(np.length<6)return {success:false,error:"New password must be at least 6 characters."};setAdminPassword(np);return {success:true}}
function deleteRowById(name,id){const s=ss().getSheetByName(name),v=s.getDataRange().getValues();for(let i=1;i<v.length;i++)if(String(v[i][0])===String(id)){s.deleteRow(i+1);return {success:true}}return {success:false,error:"Not found."}}
function orderObj(r){return {OrderID:r[0],Date:r[1] instanceof Date?r[1].toISOString():r[1],UserID:r[2],CustomerName:r[3],CustomerEmail:r[4],Location:r[5],OrderType:r[6],Movie:r[7],Showtime:r[8],Seats:parseJson(r[9],[]),Items:parseJson(r[10],[]),TicketTotal:r[11],SnackTotal:r[12],Total:r[13],Status:r[14]}}
function parseJson(x,f){try{return JSON.parse(x||"")}catch(_){return f}}
function hash(s){const bytes=Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256,s,Utilities.Charset.UTF_8);return bytes.map(b=>{const n=b<0?b+256:b;return ("0"+n.toString(16)).slice(-2)}).join("")}
function out(d){return ContentService.createTextOutput(JSON.stringify(d)).setMimeType(ContentService.MimeType.JSON)}
function jsonp(e,d){const cb=/^[A-Za-z_$][0-9A-Za-z_$]*$/.test(e.parameter.callback||"")?e.parameter.callback:"callback";return ContentService.createTextOutput(cb+"("+JSON.stringify(d)+")").setMimeType(ContentService.MimeType.JAVASCRIPT)}
