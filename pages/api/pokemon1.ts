import Image from 'next/image'

import styles from '../../styles/Pokemon.module.css'



import { NextApiRequest, NextApiResponse } from 'next';

import {useRouter} from 'next/router'


const handler = (req:NextApiRequest, res:NextApiResponse) =>{

    


    
    //const router = useRouter();
    //console.log(router.query);

    //const {name} =  router.query;

    console.log(req.query);
    const {name} =  req.query;

    console.log(name);

    let pokemon_id = '';
    let id_pokemon = '';
    
    let pokemon_name = '';
    
    //let pokemonname1 =   url.query.title; //context.params.pokemonId.toLowerCase()
    //console.log(`name1->:${pokemonname1}` );
    let pokemonname =  ""; //context.params.pokemonId.toLowerCase()
    console.log(`name->:${pokemonname}` );


    var arrPokemons = [
        {"nome":"bulbasaur","url":"1"},
        {"nome":"ivysaur","url":"2"},
        {"nome":"venusaur","url":"3"},
        {"nome":"charmander","url":"4"},
        {"nome":"charmeleon","url":"5"},
        {"nome":"charizard","url":"6"},
        {"nome":"squirtle","url":"7"},
        {"nome":"wartortle","url":"8"},
        {"nome":"blastoise","url":"9"},
        {"nome":"caterpie","url":"10"},
        {"nome":"metapod","url":"11"},
        {"nome":"butterfree","url":"12"},
        {"nome":"weedle","url":"13"},
        {"nome":"kakuna","url":"14"},
        {"nome":"beedrill","url":"15"},
        {"nome":"pidgey","url":"16"},
        {"nome":"pidgeotto","url":"17"},
        {"nome":"pidgeot","url":"18"},
        {"nome":"rattata","url":"19"},
        {"nome":"raticate","url":"20"},
        {"nome":"spearow","url":"21"},
        {"nome":"fearow","url":"22"},
        {"nome":"ekans","url":"23"},
        {"nome":"arbok","url":"24"},
        {"nome":"pikachu","url":"25"},
        {"nome":"raichu","url":"26"},
        {"nome":"sandshrew","url":"27"},
        {"nome":"sandslash","url":"28"},
        {"nome":"nidoran-f","url":"29"},
        {"nome":"nidorina","url":"30"},
        {"nome":"nidoqueen","url":"31"},
        {"nome":"nidoran-m","url":"32"},
        {"nome":"nidorino","url":"33"},
        {"nome":"nidoking","url":"34"},
        {"nome":"clefairy","url":"35"},
        {"nome":"clefable","url":"36"},
        {"nome":"vulpix","url":"37"},
        {"nome":"ninetales","url":"38"},
        {"nome":"jigglypuff","url":"39"},
        {"nome":"wigglytuff","url":"40"},
        {"nome":"zubat","url":"41"},
        {"nome":"golbat","url":"42"},
        {"nome":"oddish","url":"43"},
        {"nome":"gloom","url":"44"},
        {"nome":"vileplume","url":"45"},
        {"nome":"paras","url":"46"},
        {"nome":"parasect","url":"47"},
        {"nome":"venonat","url":"48"},
        {"nome":"venomoth","url":"49"},
        {"nome":"diglett","url":"50"},
        {"nome":"dugtrio","url":"51"},
        {"nome":"meowth","url":"52"},
        {"nome":"persian","url":"53"},
        {"nome":"psyduck","url":"54"},
        {"nome":"golduck","url":"55"},
        {"nome":"mankey","url":"56"},
        {"nome":"primeape","url":"57"},
        {"nome":"growlithe","url":"58"},
        {"nome":"arcanine","url":"59"},
        {"nome":"poliwag","url":"60"},
        {"nome":"poliwhirl","url":"61"},
        {"nome":"poliwrath","url":"62"},
        {"nome":"abra","url":"63"},
        {"nome":"kadabra","url":"64"},
        {"nome":"alakazam","url":"65"},
        {"nome":"machop","url":"66"},
        {"nome":"machoke","url":"67"},
        {"nome":"machamp","url":"68"},
        {"nome":"bellsprout","url":"69"},
        {"nome":"weepinbell","url":"70"},
        {"nome":"victreebel","url":"71"},
        {"nome":"tentacool","url":"72"},
        {"nome":"tentacruel","url":"73"},
        {"nome":"geodude","url":"74"},
        {"nome":"graveler","url":"75"},
        {"nome":"golem","url":"76"},
        {"nome":"ponyta","url":"77"},
        {"nome":"rapidash","url":"78"},
        {"nome":"slowpoke","url":"79"},
        {"nome":"slowbro","url":"80"},
        {"nome":"magnemite","url":"81"},
        {"nome":"magneton","url":"82"},
        {"nome":"farfetchd","url":"83"},
        {"nome":"doduo","url":"84"},
        {"nome":"dodrio","url":"85"},
        {"nome":"seel","url":"86"},
        {"nome":"dewgong","url":"87"},
        {"nome":"grimer","url":"88"},
        {"nome":"muk","url":"89"},
        {"nome":"shellder","url":"90"},
        {"nome":"cloyster","url":"91"},
        {"nome":"gastly","url":"92"},
        {"nome":"haunter","url":"93"},
        {"nome":"gengar","url":"94"},
        {"nome":"onix","url":"95"},
        {"nome":"drowzee","url":"96"},
        {"nome":"hypno","url":"97"},
        {"nome":"krabby","url":"98"},
        {"nome":"kingler","url":"99"},
        {"nome":"voltorb","url":"100"},
        {"nome":"electrode","url":"101"},
        {"nome":"exeggcute","url":"102"},
        {"nome":"exeggutor","url":"103"},
        {"nome":"cubone","url":"104"},
        {"nome":"marowak","url":"105"},
        {"nome":"hitmonlee","url":"106"},
        {"nome":"hitmonchan","url":"107"},
        {"nome":"lickitung","url":"108"},
        {"nome":"koffing","url":"109"},
        {"nome":"weezing","url":"110"},
        {"nome":"rhyhorn","url":"111"},
        {"nome":"rhydon","url":"112"},
        {"nome":"chansey","url":"113"},
        {"nome":"tangela","url":"114"},
        {"nome":"kangaskhan","url":"115"},
        {"nome":"horsea","url":"116"},
        {"nome":"seadra","url":"117"},
        {"nome":"goldeen","url":"118"},
        {"nome":"seaking","url":"119"},
        {"nome":"staryu","url":"120"},
        {"nome":"starmie","url":"121"},
        {"nome":"mr-mime","url":"122"},
        {"nome":"scyther","url":"123"},
        {"nome":"jynx","url":"124"},
        {"nome":"electabuzz","url":"125"},
        {"nome":"magmar","url":"126"},
        {"nome":"pinsir","url":"127"},
        {"nome":"tauros","url":"128"},
        {"nome":"magikarp","url":"129"},
        {"nome":"gyarados","url":"130"},
        {"nome":"lapras","url":"131"},
        {"nome":"ditto","url":"132"},
        {"nome":"eevee","url":"133"},
        {"nome":"vaporeon","url":"134"},
        {"nome":"jolteon","url":"135"},
        {"nome":"flareon","url":"136"},
        {"nome":"porygon","url":"137"},
        {"nome":"omanyte","url":"138"},
        {"nome":"omastar","url":"139"},
        {"nome":"kabuto","url":"140"},
        {"nome":"kabutops","url":"141"},
        {"nome":"aerodactyl","url":"142"},
        {"nome":"snorlax","url":"143"},
        {"nome":"articuno","url":"144"},
        {"nome":"zapdos","url":"145"},
        {"nome":"moltres","url":"146"},
        {"nome":"dratini","url":"147"},
        {"nome":"dragonair","url":"148"},
        {"nome":"dragonite","url":"149"},
        {"nome":"mewtwo","url":"150"},
        {"nome":"mew","url":"151"},
        {"nome":"chikorita","url":"152"},
        {"nome":"bayleef","url":"153"},
        {"nome":"meganium","url":"154"},
        {"nome":"cyndaquil","url":"155"},
        {"nome":"quilava","url":"156"},
        {"nome":"typhlosion","url":"157"},
        {"nome":"totodile","url":"158"},
        {"nome":"croconaw","url":"159"},
        {"nome":"feraligatr","url":"160"},
        {"nome":"sentret","url":"161"},
        {"nome":"furret","url":"162"},
        {"nome":"hoothoot","url":"163"},
        {"nome":"noctowl","url":"164"},
        {"nome":"ledyba","url":"165"},
        {"nome":"ledian","url":"166"},
        {"nome":"spinarak","url":"167"},
        {"nome":"ariados","url":"168"},
        {"nome":"crobat","url":"169"},
        {"nome":"chinchou","url":"170"},
        {"nome":"lanturn","url":"171"},
        {"nome":"pichu","url":"172"},
        {"nome":"cleffa","url":"173"},
        {"nome":"igglybuff","url":"174"},
        {"nome":"togepi","url":"175"},
        {"nome":"togetic","url":"176"},
        {"nome":"natu","url":"177"},
        {"nome":"xatu","url":"178"},
        {"nome":"mareep","url":"179"},
        {"nome":"flaaffy","url":"180"},
        {"nome":"ampharos","url":"181"},
        {"nome":"bellossom","url":"182"},
        {"nome":"marill","url":"183"},
        {"nome":"azumarill","url":"184"},
        {"nome":"sudowoodo","url":"185"},
        {"nome":"politoed","url":"186"},
        {"nome":"hoppip","url":"187"},
        {"nome":"skiploom","url":"188"},
        {"nome":"jumpluff","url":"189"},
        {"nome":"aipom","url":"190"},
        {"nome":"sunkern","url":"191"},
        {"nome":"sunflora","url":"192"},
        {"nome":"yanma","url":"193"},
        {"nome":"wooper","url":"194"},
        {"nome":"quagsire","url":"195"},
        {"nome":"espeon","url":"196"},
        {"nome":"umbreon","url":"197"},
        {"nome":"murkrow","url":"198"},
        {"nome":"slowking","url":"199"},
        {"nome":"misdreavus","url":"200"},
        {"nome":"unown","url":"201"},
        {"nome":"wobbuffet","url":"202"},
        {"nome":"girafarig","url":"203"},
        {"nome":"pineco","url":"204"},
        {"nome":"forretress","url":"205"},
        {"nome":"dunsparce","url":"206"},
        {"nome":"gligar","url":"207"},
        {"nome":"steelix","url":"208"},
        {"nome":"snubbull","url":"209"},
        {"nome":"granbull","url":"210"},
        {"nome":"qwilfish","url":"211"},
        {"nome":"scizor","url":"212"},
        {"nome":"shuckle","url":"213"},
        {"nome":"heracross","url":"214"},
        {"nome":"sneasel","url":"215"},
        {"nome":"teddiursa","url":"216"},
        {"nome":"ursaring","url":"217"},
        {"nome":"slugma","url":"218"},
        {"nome":"magcargo","url":"219"},
        {"nome":"swinub","url":"220"},
        {"nome":"piloswine","url":"221"},
        {"nome":"corsola","url":"222"},
        {"nome":"remoraid","url":"223"},
        {"nome":"octillery","url":"224"},
        {"nome":"delibird","url":"225"},
        {"nome":"mantine","url":"226"},
        {"nome":"skarmory","url":"227"},
        {"nome":"houndour","url":"228"},
        {"nome":"houndoom","url":"229"},
        {"nome":"kingdra","url":"230"},
        {"nome":"phanpy","url":"231"},
        {"nome":"donphan","url":"232"},
        {"nome":"porygon2","url":"233"},
        {"nome":"stantler","url":"234"},
        {"nome":"smeargle","url":"235"},
        {"nome":"tyrogue","url":"236"},
        {"nome":"hitmontop","url":"237"},
        {"nome":"smoochum","url":"238"},
        {"nome":"elekid","url":"239"},
        {"nome":"magby","url":"240"},
        {"nome":"miltank","url":"241"},
        {"nome":"blissey","url":"242"},
        {"nome":"raikou","url":"243"},
        {"nome":"entei","url":"244"},
        {"nome":"suicune","url":"245"},
        {"nome":"larvitar","url":"246"},
        {"nome":"pupitar","url":"247"},
        {"nome":"tyranitar","url":"248"},
        {"nome":"lugia","url":"249"},
        {"nome":"ho-oh","url":"250"},
        {"nome":"celebi","url":"251"},
        {"nome":"treecko","url":"252"},
        {"nome":"grovyle","url":"253"},
        {"nome":"sceptile","url":"254"},
        {"nome":"torchic","url":"255"},
        {"nome":"combusken","url":"256"},
        {"nome":"blaziken","url":"257"},
        {"nome":"mudkip","url":"258"},
        {"nome":"marshtomp","url":"259"},
        {"nome":"swampert","url":"260"},
        {"nome":"poochyena","url":"261"},
        {"nome":"mightyena","url":"262"},
        {"nome":"zigzagoon","url":"263"},
        {"nome":"linoone","url":"264"},
        {"nome":"wurmple","url":"265"},
        {"nome":"silcoon","url":"266"},
        {"nome":"beautifly","url":"267"},
        {"nome":"cascoon","url":"268"},
        {"nome":"dustox","url":"269"},
        {"nome":"lotad","url":"270"},
        {"nome":"lombre","url":"271"},
        {"nome":"ludicolo","url":"272"},
        {"nome":"seedot","url":"273"},
        {"nome":"nuzleaf","url":"274"},
        {"nome":"shiftry","url":"275"},
        {"nome":"taillow","url":"276"},
        {"nome":"swellow","url":"277"},
        {"nome":"wingull","url":"278"},
        {"nome":"pelipper","url":"279"},
        {"nome":"ralts","url":"280"},
        {"nome":"kirlia","url":"281"},
        {"nome":"gardevoir","url":"282"},
        {"nome":"surskit","url":"283"},
        {"nome":"masquerain","url":"284"},
        {"nome":"shroomish","url":"285"},
        {"nome":"breloom","url":"286"},
        {"nome":"slakoth","url":"287"},
        {"nome":"vigoroth","url":"288"},
        {"nome":"slaking","url":"289"},
        {"nome":"nincada","url":"290"},
        {"nome":"ninjask","url":"291"},
        {"nome":"shedinja","url":"292"},
        {"nome":"whismur","url":"293"},
        {"nome":"loudred","url":"294"},
        {"nome":"exploud","url":"295"},
        {"nome":"makuhita","url":"296"},
        {"nome":"hariyama","url":"297"},
        {"nome":"azurill","url":"298"},
        {"nome":"nosepass","url":"299"},
        {"nome":"skitty","url":"300"},
        {"nome":"delcatty","url":"301"},
        {"nome":"sableye","url":"302"},
        {"nome":"mawile","url":"303"},
        {"nome":"aron","url":"304"},
        {"nome":"lairon","url":"305"},
        {"nome":"aggron","url":"306"},
        {"nome":"meditite","url":"307"},
        {"nome":"medicham","url":"308"},
        {"nome":"electrike","url":"309"},
        {"nome":"manectric","url":"310"},
        {"nome":"plusle","url":"311"},
        {"nome":"minun","url":"312"},
        {"nome":"volbeat","url":"313"},
        {"nome":"illumise","url":"314"},
        {"nome":"roselia","url":"315"},
        {"nome":"gulpin","url":"316"},
        {"nome":"swalot","url":"317"},
        {"nome":"carvanha","url":"318"},
        {"nome":"sharpedo","url":"319"},
        {"nome":"wailmer","url":"320"},
        {"nome":"wailord","url":"321"},
        {"nome":"numel","url":"322"},
        {"nome":"camerupt","url":"323"},
        {"nome":"torkoal","url":"324"},
        {"nome":"spoink","url":"325"},
        {"nome":"grumpig","url":"326"},
        {"nome":"spinda","url":"327"},
        {"nome":"trapinch","url":"328"},
        {"nome":"vibrava","url":"329"},
        {"nome":"flygon","url":"330"},
        {"nome":"cacnea","url":"331"},
        {"nome":"cacturne","url":"332"},
        {"nome":"swablu","url":"333"},
        {"nome":"altaria","url":"334"},
        {"nome":"zangoose","url":"335"},
        {"nome":"seviper","url":"336"},
        {"nome":"lunatone","url":"337"},
        {"nome":"solrock","url":"338"},
        {"nome":"barboach","url":"339"},
        {"nome":"whiscash","url":"340"},
        {"nome":"corphish","url":"341"},
        {"nome":"crawdaunt","url":"342"},
        {"nome":"baltoy","url":"343"},
        {"nome":"claydol","url":"344"},
        {"nome":"lileep","url":"345"},
        {"nome":"cradily","url":"346"},
        {"nome":"anorith","url":"347"},
        {"nome":"armaldo","url":"348"},
        {"nome":"feebas","url":"349"},
        {"nome":"milotic","url":"350"},
        {"nome":"castform","url":"351"},
        {"nome":"kecleon","url":"352"},
        {"nome":"shuppet","url":"353"},
        {"nome":"banette","url":"354"},
        {"nome":"duskull","url":"355"},
        {"nome":"dusclops","url":"356"},
        {"nome":"tropius","url":"357"},
        {"nome":"chimecho","url":"358"},
        {"nome":"absol","url":"359"},
        {"nome":"wynaut","url":"360"},
        {"nome":"snorunt","url":"361"},
        {"nome":"glalie","url":"362"},
        {"nome":"spheal","url":"363"},
        {"nome":"sealeo","url":"364"},
        {"nome":"walrein","url":"365"},
        {"nome":"clamperl","url":"366"},
        {"nome":"huntail","url":"367"},
        {"nome":"gorebyss","url":"368"},
        {"nome":"relicanth","url":"369"},
        {"nome":"luvdisc","url":"370"},
        {"nome":"bagon","url":"371"},
        {"nome":"shelgon","url":"372"},
        {"nome":"salamence","url":"373"},
        {"nome":"beldum","url":"374"},
        {"nome":"metang","url":"375"},
        {"nome":"metagross","url":"376"},
        {"nome":"regirock","url":"377"},
        {"nome":"regice","url":"378"},
        {"nome":"registeel","url":"379"},
        {"nome":"latias","url":"380"},
        {"nome":"latios","url":"381"},
        {"nome":"kyogre","url":"382"},
        {"nome":"groudon","url":"383"},
        {"nome":"rayquaza","url":"384"},
        {"nome":"jirachi","url":"385"},
        {"nome":"deoxys-normal","url":"386"},
        {"nome":"turtwig","url":"387"},
        {"nome":"grotle","url":"388"},
        {"nome":"torterra","url":"389"},
        {"nome":"chimchar","url":"390"},
        {"nome":"monferno","url":"391"},
        {"nome":"infernape","url":"392"},
        {"nome":"piplup","url":"393"},
        {"nome":"prinplup","url":"394"},
        {"nome":"empoleon","url":"395"},
        {"nome":"starly","url":"396"},
        {"nome":"staravia","url":"397"},
        {"nome":"staraptor","url":"398"},
        {"nome":"bidoof","url":"399"},
        {"nome":"bibarel","url":"400"},
        {"nome":"kricketot","url":"401"},
        {"nome":"kricketune","url":"402"},
        {"nome":"shinx","url":"403"},
        {"nome":"luxio","url":"404"},
        {"nome":"luxray","url":"405"},
        {"nome":"budew","url":"406"},
        {"nome":"roserade","url":"407"},
        {"nome":"cranidos","url":"408"},
        {"nome":"rampardos","url":"409"},
        {"nome":"shieldon","url":"410"},
        {"nome":"bastiodon","url":"411"},
        {"nome":"burmy","url":"412"},
        {"nome":"wormadam-plant","url":"413"},
        {"nome":"mothim","url":"414"},
        {"nome":"combee","url":"415"},
        {"nome":"vespiquen","url":"416"},
        {"nome":"pachirisu","url":"417"},
        {"nome":"buizel","url":"418"},
        {"nome":"floatzel","url":"419"},
        {"nome":"cherubi","url":"420"},
        {"nome":"cherrim","url":"421"},
        {"nome":"shellos","url":"422"},
        {"nome":"gastrodon","url":"423"},
        {"nome":"ambipom","url":"424"},
        {"nome":"drifloon","url":"425"},
        {"nome":"drifblim","url":"426"},
        {"nome":"buneary","url":"427"},
        {"nome":"lopunny","url":"428"},
        {"nome":"mismagius","url":"429"},
        {"nome":"honchkrow","url":"430"},
        {"nome":"glameow","url":"431"},
        {"nome":"purugly","url":"432"},
        {"nome":"chingling","url":"433"},
        {"nome":"stunky","url":"434"},
        {"nome":"skuntank","url":"435"},
        {"nome":"bronzor","url":"436"},
        {"nome":"bronzong","url":"437"},
        {"nome":"bonsly","url":"438"},
        {"nome":"mime-jr","url":"439"},
        {"nome":"happiny","url":"440"},
        {"nome":"chatot","url":"441"},
        {"nome":"spiritomb","url":"442"},
        {"nome":"gible","url":"443"},
        {"nome":"gabite","url":"444"},
        {"nome":"garchomp","url":"445"},
        {"nome":"munchlax","url":"446"},
        {"nome":"riolu","url":"447"},
        {"nome":"lucario","url":"448"},
        {"nome":"hippopotas","url":"449"},
        {"nome":"hippowdon","url":"450"},
        {"nome":"skorupi","url":"451"},
        {"nome":"drapion","url":"452"},
        {"nome":"croagunk","url":"453"},
        {"nome":"toxicroak","url":"454"},
        {"nome":"carnivine","url":"455"},
        {"nome":"finneon","url":"456"},
        {"nome":"lumineon","url":"457"},
        {"nome":"mantyke","url":"458"},
        {"nome":"snover","url":"459"},
        {"nome":"abomasnow","url":"460"},
        {"nome":"weavile","url":"461"},
        {"nome":"magnezone","url":"462"},
        {"nome":"lickilicky","url":"463"},
        {"nome":"rhyperior","url":"464"},
        {"nome":"tangrowth","url":"465"},
        {"nome":"electivire","url":"466"},
        {"nome":"magmortar","url":"467"},
        {"nome":"togekiss","url":"468"},
        {"nome":"yanmega","url":"469"},
        {"nome":"leafeon","url":"470"},
        {"nome":"glaceon","url":"471"},
        {"nome":"gliscor","url":"472"},
        {"nome":"mamoswine","url":"473"},
        {"nome":"porygon-z","url":"474"},
        {"nome":"gallade","url":"475"},
        {"nome":"probopass","url":"476"},
        {"nome":"dusknoir","url":"477"},
        {"nome":"froslass","url":"478"},
        {"nome":"rotom","url":"479"},
        {"nome":"uxie","url":"480"},
        {"nome":"mesprit","url":"481"},
        {"nome":"azelf","url":"482"},
        {"nome":"dialga","url":"483"},
        {"nome":"palkia","url":"484"},
        {"nome":"heatran","url":"485"},
        {"nome":"regigigas","url":"486"},
        {"nome":"giratina-altered","url":"487"},
        {"nome":"cresselia","url":"488"},
        {"nome":"phione","url":"489"},
        {"nome":"manaphy","url":"490"},
        {"nome":"darkrai","url":"491"},
        {"nome":"shaymin-land","url":"492"},
        {"nome":"arceus","url":"493"},
        {"nome":"victini","url":"494"},
        {"nome":"snivy","url":"495"},
        {"nome":"servine","url":"496"},
        {"nome":"serperior","url":"497"},
        {"nome":"tepig","url":"498"},
        {"nome":"pignite","url":"499"},
        {"nome":"emboar","url":"500"},
        {"nome":"oshawott","url":"501"},
        {"nome":"dewott","url":"502"},
        {"nome":"samurott","url":"503"},
        {"nome":"patrat","url":"504"},
        {"nome":"watchog","url":"505"},
        {"nome":"lillipup","url":"506"},
        {"nome":"herdier","url":"507"},
        {"nome":"stoutland","url":"508"},
        {"nome":"purrloin","url":"509"},
        {"nome":"liepard","url":"510"},
        {"nome":"pansage","url":"511"},
        {"nome":"simisage","url":"512"},
        {"nome":"pansear","url":"513"},
        {"nome":"simisear","url":"514"},
        {"nome":"panpour","url":"515"},
        {"nome":"simipour","url":"516"},
        {"nome":"munna","url":"517"},
        {"nome":"musharna","url":"518"},
        {"nome":"pidove","url":"519"},
        {"nome":"tranquill","url":"520"},
        {"nome":"unfezant","url":"521"},
        {"nome":"blitzle","url":"522"},
        {"nome":"zebstrika","url":"523"},
        {"nome":"roggenrola","url":"524"},
        {"nome":"boldore","url":"525"},
        {"nome":"gigalith","url":"526"},
        {"nome":"woobat","url":"527"},
        {"nome":"swoobat","url":"528"},
        {"nome":"drilbur","url":"529"},
        {"nome":"excadrill","url":"530"},
        {"nome":"audino","url":"531"},
        {"nome":"timburr","url":"532"},
        {"nome":"gurdurr","url":"533"},
        {"nome":"conkeldurr","url":"534"},
        {"nome":"tympole","url":"535"},
        {"nome":"palpitoad","url":"536"},
        {"nome":"seismitoad","url":"537"},
        {"nome":"throh","url":"538"},
        {"nome":"sawk","url":"539"},
        {"nome":"sewaddle","url":"540"},
        {"nome":"swadloon","url":"541"},
        {"nome":"leavanny","url":"542"},
        {"nome":"venipede","url":"543"},
        {"nome":"whirlipede","url":"544"},
        {"nome":"scolipede","url":"545"},
        {"nome":"cottonee","url":"546"},
        {"nome":"whimsicott","url":"547"},
        {"nome":"petilil","url":"548"},
        {"nome":"lilligant","url":"549"},
        {"nome":"basculin-red-striped","url":"550"},
        {"nome":"sandile","url":"551"},
        {"nome":"krokorok","url":"552"},
        {"nome":"krookodile","url":"553"},
        {"nome":"darumaka","url":"554"},
        {"nome":"darmanitan-standard","url":"555"},
        {"nome":"maractus","url":"556"},
        {"nome":"dwebble","url":"557"},
        {"nome":"crustle","url":"558"},
        {"nome":"scraggy","url":"559"},
        {"nome":"scrafty","url":"560"},
        {"nome":"sigilyph","url":"561"},
        {"nome":"yamask","url":"562"},
        {"nome":"cofagrigus","url":"563"},
        {"nome":"tirtouga","url":"564"},
        {"nome":"carracosta","url":"565"},
        {"nome":"archen","url":"566"},
        {"nome":"archeops","url":"567"},
        {"nome":"trubbish","url":"568"},
        {"nome":"garbodor","url":"569"},
        {"nome":"zorua","url":"570"},
        {"nome":"zoroark","url":"571"},
        {"nome":"minccino","url":"572"},
        {"nome":"cinccino","url":"573"},
        {"nome":"gothita","url":"574"},
        {"nome":"gothorita","url":"575"},
        {"nome":"gothitelle","url":"576"},
        {"nome":"solosis","url":"577"},
        {"nome":"duosion","url":"578"},
        {"nome":"reuniclus","url":"579"},
        {"nome":"ducklett","url":"580"},
        {"nome":"swanna","url":"581"},
        {"nome":"vanillite","url":"582"},
        {"nome":"vanillish","url":"583"},
        {"nome":"vanilluxe","url":"584"},
        {"nome":"deerling","url":"585"},
        {"nome":"sawsbuck","url":"586"},
        {"nome":"emolga","url":"587"},
        {"nome":"karrablast","url":"588"},
        {"nome":"escavalier","url":"589"},
        {"nome":"foongus","url":"590"},
        {"nome":"amoonguss","url":"591"},
        {"nome":"frillish","url":"592"},
        {"nome":"jellicent","url":"593"},
        {"nome":"alomomola","url":"594"},
        {"nome":"joltik","url":"595"},
        {"nome":"galvantula","url":"596"},
        {"nome":"ferroseed","url":"597"},
        {"nome":"ferrothorn","url":"598"},
        {"nome":"klink","url":"599"},
        {"nome":"klang","url":"600"},
        {"nome":"klinklang","url":"601"},
        {"nome":"tynamo","url":"602"},
        {"nome":"eelektrik","url":"603"},
        {"nome":"eelektross","url":"604"},
        {"nome":"elgyem","url":"605"},
        {"nome":"beheeyem","url":"606"},
        {"nome":"litwick","url":"607"},
        {"nome":"lampent","url":"608"},
        {"nome":"chandelure","url":"609"},
        {"nome":"axew","url":"610"},
        {"nome":"fraxure","url":"611"},
        {"nome":"haxorus","url":"612"},
        {"nome":"cubchoo","url":"613"},
        {"nome":"beartic","url":"614"},
        {"nome":"cryogonal","url":"615"},
        {"nome":"shelmet","url":"616"},
        {"nome":"accelgor","url":"617"},
        {"nome":"stunfisk","url":"618"},
        {"nome":"mienfoo","url":"619"},
        {"nome":"mienshao","url":"620"},
        {"nome":"druddigon","url":"621"},
        {"nome":"golett","url":"622"},
        {"nome":"golurk","url":"623"},
        {"nome":"pawniard","url":"624"},
        {"nome":"bisharp","url":"625"},
        {"nome":"bouffalant","url":"626"},
        {"nome":"rufflet","url":"627"},
        {"nome":"braviary","url":"628"},
        {"nome":"vullaby","url":"629"},
        {"nome":"mandibuzz","url":"630"},
        {"nome":"heatmor","url":"631"},
        {"nome":"durant","url":"632"},
        {"nome":"deino","url":"633"},
        {"nome":"zweilous","url":"634"},
        {"nome":"hydreigon","url":"635"},
        {"nome":"larvesta","url":"636"},
        {"nome":"volcarona","url":"637"},
        {"nome":"cobalion","url":"638"},
        {"nome":"terrakion","url":"639"},
        {"nome":"virizion","url":"640"},
        {"nome":"tornadus-incarnate","url":"641"},
        {"nome":"thundurus-incarnate","url":"642"},
        {"nome":"reshiram","url":"643"},
        {"nome":"zekrom","url":"644"},
        {"nome":"landorus-incarnate","url":"645"},
        {"nome":"kyurem","url":"646"},
        {"nome":"keldeo-ordinary","url":"647"},
        {"nome":"meloetta-aria","url":"648"},
        {"nome":"genesect","url":"649"},
        {"nome":"chespin","url":"650"},
        {"nome":"quilladin","url":"651"},
        {"nome":"chesnaught","url":"652"},
        {"nome":"fennekin","url":"653"},
        {"nome":"braixen","url":"654"},
        {"nome":"delphox","url":"655"},
        {"nome":"froakie","url":"656"},
        {"nome":"frogadier","url":"657"},
        {"nome":"greninja","url":"658"},
        {"nome":"bunnelby","url":"659"},
        {"nome":"diggersby","url":"660"},
        {"nome":"fletchling","url":"661"},
        {"nome":"fletchinder","url":"662"},
        {"nome":"talonflame","url":"663"},
        {"nome":"scatterbug","url":"664"},
        {"nome":"spewpa","url":"665"},
        {"nome":"vivillon","url":"666"},
        {"nome":"litleo","url":"667"},
        {"nome":"pyroar","url":"668"},
        {"nome":"flabebe","url":"669"},
        {"nome":"floette","url":"670"},
        {"nome":"florges","url":"671"},
        {"nome":"skiddo","url":"672"},
        {"nome":"gogoat","url":"673"},
        {"nome":"pancham","url":"674"},
        {"nome":"pangoro","url":"675"},
        {"nome":"furfrou","url":"676"},
        {"nome":"espurr","url":"677"},
        {"nome":"meowstic-male","url":"678"},
        {"nome":"honedge","url":"679"},
        {"nome":"doublade","url":"680"},
        {"nome":"aegislash-shield","url":"681"},
        {"nome":"spritzee","url":"682"},
        {"nome":"aromatisse","url":"683"},
        {"nome":"swirlix","url":"684"},
        {"nome":"slurpuff","url":"685"},
        {"nome":"inkay","url":"686"},
        {"nome":"malamar","url":"687"},
        {"nome":"binacle","url":"688"},
        {"nome":"barbaracle","url":"689"},
        {"nome":"skrelp","url":"690"},
        {"nome":"dragalge","url":"691"},
        {"nome":"clauncher","url":"692"},
        {"nome":"clawitzer","url":"693"},
        {"nome":"helioptile","url":"694"},
        {"nome":"heliolisk","url":"695"},
        {"nome":"tyrunt","url":"696"},
        {"nome":"tyrantrum","url":"697"},
        {"nome":"amaura","url":"698"},
        {"nome":"aurorus","url":"699"},
        {"nome":"sylveon","url":"700"},
        {"nome":"hawlucha","url":"701"},
        {"nome":"dedenne","url":"702"},
        {"nome":"carbink","url":"703"},
        {"nome":"goomy","url":"704"},
        {"nome":"sliggoo","url":"705"},
        {"nome":"goodra","url":"706"},
        {"nome":"klefki","url":"707"},
        {"nome":"phantump","url":"708"},
        {"nome":"trevenant","url":"709"},
        {"nome":"pumpkaboo-average","url":"710"},
        {"nome":"gourgeist-average","url":"711"},
        {"nome":"bergmite","url":"712"},
        {"nome":"avalugg","url":"713"},
        {"nome":"noibat","url":"714"},
        {"nome":"noivern","url":"715"},
        {"nome":"xerneas","url":"716"},
        {"nome":"yveltal","url":"717"},
        {"nome":"zygarde-50","url":"718"},
        {"nome":"diancie","url":"719"},
        {"nome":"hoopa","url":"720"},
        {"nome":"volcanion","url":"721"},
        {"nome":"rowlet","url":"722"},
        {"nome":"dartrix","url":"723"},
        {"nome":"decidueye","url":"724"},
        {"nome":"litten","url":"725"},
        {"nome":"torracat","url":"726"},
        {"nome":"incineroar","url":"727"},
        {"nome":"popplio","url":"728"},
        {"nome":"brionne","url":"729"},
        {"nome":"primarina","url":"730"},
        {"nome":"pikipek","url":"731"},
        {"nome":"trumbeak","url":"732"},
        {"nome":"toucannon","url":"733"},
        {"nome":"yungoos","url":"734"},
        {"nome":"gumshoos","url":"735"},
        {"nome":"grubbin","url":"736"},
        {"nome":"charjabug","url":"737"},
        {"nome":"vikavolt","url":"738"},
        {"nome":"crabrawler","url":"739"},
        {"nome":"crabominable","url":"740"},
        {"nome":"oricorio-baile","url":"741"},
        {"nome":"cutiefly","url":"742"},
        {"nome":"ribombee","url":"743"},
        {"nome":"rockruff","url":"744"},
        {"nome":"lycanroc-midday","url":"745"},
        {"nome":"wishiwashi-solo","url":"746"},
        {"nome":"mareanie","url":"747"},
        {"nome":"toxapex","url":"748"},
        {"nome":"mudbray","url":"749"},
        {"nome":"mudsdale","url":"750"},
        {"nome":"dewpider","url":"751"},
        {"nome":"araquanid","url":"752"},
        {"nome":"fomantis","url":"753"},
        {"nome":"lurantis","url":"754"},
        {"nome":"morelull","url":"755"},
        {"nome":"shiinotic","url":"756"},
        {"nome":"salandit","url":"757"},
        {"nome":"salazzle","url":"758"},
        {"nome":"stufful","url":"759"},
        {"nome":"bewear","url":"760"},
        {"nome":"bounsweet","url":"761"},
        {"nome":"steenee","url":"762"},
        {"nome":"tsareena","url":"763"},
        {"nome":"comfey","url":"764"},
        {"nome":"oranguru","url":"765"},
        {"nome":"passimian","url":"766"},
        {"nome":"wimpod","url":"767"},
        {"nome":"golisopod","url":"768"},
        {"nome":"sandygast","url":"769"},
        {"nome":"palossand","url":"770"},
        {"nome":"pyukumuku","url":"771"},
        {"nome":"type-null","url":"772"},
        {"nome":"silvally","url":"773"},
        {"nome":"minior-red-meteor","url":"774"},
        {"nome":"komala","url":"775"},
        {"nome":"turtonator","url":"776"},
        {"nome":"togedemaru","url":"777"},
        {"nome":"mimikyu-disguised","url":"778"},
        {"nome":"bruxish","url":"779"},
        {"nome":"drampa","url":"780"},
        {"nome":"dhelmise","url":"781"},
        {"nome":"jangmo-o","url":"782"},
        {"nome":"hakamo-o","url":"783"},
        {"nome":"kommo-o","url":"784"},
        {"nome":"tapu-koko","url":"785"},
        {"nome":"tapu-lele","url":"786"},
        {"nome":"tapu-bulu","url":"787"},
        {"nome":"tapu-fini","url":"788"},
        {"nome":"cosmog","url":"789"},
        {"nome":"cosmoem","url":"790"},
        {"nome":"solgaleo","url":"791"},
        {"nome":"lunala","url":"792"},
        {"nome":"nihilego","url":"793"},
        {"nome":"buzzwole","url":"794"},
        {"nome":"pheromosa","url":"795"},
        {"nome":"xurkitree","url":"796"},
        {"nome":"celesteela","url":"797"},
        {"nome":"kartana","url":"798"},
        {"nome":"guzzlord","url":"799"},
        {"nome":"necrozma","url":"800"},
        {"nome":"magearna","url":"801"},
        {"nome":"marshadow","url":"802"},
        {"nome":"poipole","url":"803"},
        {"nome":"naganadel","url":"804"},
        {"nome":"stakataka","url":"805"},
        {"nome":"blacephalon","url":"806"},
        {"nome":"zeraora","url":"807"},
        {"nome":"meltan","url":"808"},
        {"nome":"melmetal","url":"809"},
        {"nome":"grookey","url":"810"},
        {"nome":"thwackey","url":"811"},
        {"nome":"rillaboom","url":"812"},
        {"nome":"scorbunny","url":"813"},
        {"nome":"raboot","url":"814"},
        {"nome":"cinderace","url":"815"},
        {"nome":"sobble","url":"816"},
        {"nome":"drizzile","url":"817"},
        {"nome":"inteleon","url":"818"},
        {"nome":"skwovet","url":"819"},
        {"nome":"greedent","url":"820"},
        {"nome":"rookidee","url":"821"},
        {"nome":"corvisquire","url":"822"},
        {"nome":"corviknight","url":"823"},
        {"nome":"blipbug","url":"824"},
        {"nome":"dottler","url":"825"},
        {"nome":"orbeetle","url":"826"},
        {"nome":"nickit","url":"827"},
        {"nome":"thievul","url":"828"},
        {"nome":"gossifleur","url":"829"},
        {"nome":"eldegoss","url":"830"},
        {"nome":"wooloo","url":"831"},
        {"nome":"dubwool","url":"832"},
        {"nome":"chewtle","url":"833"},
        {"nome":"drednaw","url":"834"},
        {"nome":"yamper","url":"835"},
        {"nome":"boltund","url":"836"},
        {"nome":"rolycoly","url":"837"},
        {"nome":"carkol","url":"838"},
        {"nome":"coalossal","url":"839"},
        {"nome":"applin","url":"840"},
        {"nome":"flapple","url":"841"},
        {"nome":"appletun","url":"842"},
        {"nome":"silicobra","url":"843"},
        {"nome":"sandaconda","url":"844"},
        {"nome":"cramorant","url":"845"},
        {"nome":"arrokuda","url":"846"},
        {"nome":"barraskewda","url":"847"},
        {"nome":"toxel","url":"848"},
        {"nome":"toxtricity-amped","url":"849"},
        {"nome":"sizzlipede","url":"850"},
        {"nome":"centiskorch","url":"851"},
        {"nome":"clobbopus","url":"852"},
        {"nome":"grapploct","url":"853"},
        {"nome":"sinistea","url":"854"},
        {"nome":"polteageist","url":"855"},
        {"nome":"hatenna","url":"856"},
        {"nome":"hattrem","url":"857"},
        {"nome":"hatterene","url":"858"},
        {"nome":"impidimp","url":"859"},
        {"nome":"morgrem","url":"860"},
        {"nome":"grimmsnarl","url":"861"},
        {"nome":"obstagoon","url":"862"},
        {"nome":"perrserker","url":"863"},
        {"nome":"cursola","url":"864"},
        {"nome":"sirfetchd","url":"865"},
        {"nome":"mr-rime","url":"866"},
        {"nome":"runerigus","url":"867"},
        {"nome":"milcery","url":"868"},
        {"nome":"alcremie","url":"869"},
        {"nome":"falinks","url":"870"},
        {"nome":"pincurchin","url":"871"},
        {"nome":"snom","url":"872"},
        {"nome":"frosmoth","url":"873"},
        {"nome":"stonjourner","url":"874"},
        {"nome":"eiscue-ice","url":"875"},
        {"nome":"indeedee-male","url":"876"},
        {"nome":"morpeko-full-belly","url":"877"},
        {"nome":"cufant","url":"878"},
        {"nome":"copperajah","url":"879"},
        {"nome":"dracozolt","url":"880"},
        {"nome":"arctozolt","url":"881"},
        {"nome":"dracovish","url":"882"},
        {"nome":"arctovish","url":"883"},
        {"nome":"duraludon","url":"884"},
        {"nome":"dreepy","url":"885"},
        {"nome":"drakloak","url":"886"},
        {"nome":"dragapult","url":"887"},
        {"nome":"zacian","url":"888"},
        {"nome":"zamazenta","url":"889"},
        {"nome":"eternatus","url":"890"},
        {"nome":"kubfu","url":"891"},
        {"nome":"urshifu-single-strike","url":"892"},
        {"nome":"zarude","url":"893"},
        {"nome":"regieleki","url":"894"},
        {"nome":"regidrago","url":"895"},
        {"nome":"glastrier","url":"896"},
        {"nome":"spectrier","url":"897"},
        {"nome":"calyrex","url":"898"},
        {"nome":"deoxys-attack","url":"10001"},
        {"nome":"deoxys-defense","url":"10002"}
        ]


    
    arrPokemons.forEach(function(obj) {
             //console.log(obj.nome); 
        
        

             pokemon_name = obj.nome;
             pokemon_id = obj.url;
             
             //console.log(`Nome e ID: ${pokemon_name} - ${pokemon_id }`);
     
             if (name == pokemon_name){
                 id_pokemon = pokemon_id;
                
             }

    });

  

   
   

    //const id = context.params.pokemonId
    console.log(`id:${id_pokemon}` );
    console.log(`name:${pokemonname}` );

    /*
    if (id_pokemon != 0){
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id_pokemon}`)

        const data = await res.json()

        return {
            props: {pokemon:data},
        }
    }
    
    else if (id_pokemon != 0){
         return {
             props: {pokemon:'notfound'},
         }
    }*/

     //return {
     //        props: {pokemon:`[{"id":${id_pokemon}}]`},
     //    }

    var resultado =  `[{"id":${id_pokemon}}]`;

    //if (router.isFallback){
    //    return res.status(200).json({ name: 'Carregando' }) //<div>Carregando...</div>
    //}

    //return  res.json({status: id_pokemon})
    //return {id_pokemon};

    res.status(200).json({'id_pokemon':id_pokemon})
    
    //return(
    //     json({ idPokemon: id_pokemon })
    //     // <div className={styles.pokemon_container}>
    //    <h1>{resultado}</h1>
    //     // </div>
    //)

    

}

export default handler;