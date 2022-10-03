const chai = require("chai");
const path = require("path");
const snarkjs = require("snarkjs");
const bigInt = require("big-integer");
const assert = chai.assert;

const compiler = require("circom");

const { splitToWords, assertWitnessHas } = require("./util.js");

chai.should();

describe("Rsa pkcs1v15 verify", () => {
    var rsa_pkvs1v15_circuit;

    before(async () => {
        let cirDef = await compiler(path.join(__dirname, "circuits", "rsa_verify.circom"));
        rsa_pkvs1v15_circuit = new snarkjs.Circuit(cirDef);
    });


    it("2048 bits public key. correct sign. 1", () => {
        // public key params. decimal
        // const modulus = bigInt("24226501697440012621102249466312043787685293040734225606346036389705515508545746221669035424138747582133889500686654172873671086178893587422987328751464627501601101326475761646014534358699943642495332701081302954020983110372109611581202820849485662540890985814355975252780310958088652613376767040069489530039075302709233494829280591680666351811024913107949144932224439129715181798714328219977771472462901856297952813239115577652450722815852332547886777292613005505949100406231716599634852632308325816916535875123863510650526931916871614411907700873376659841257216885666098127478325534982891697988739616416855214839339");
        const exp = bigInt(65537);
        // signature. decimal
        const modulus = bigInt("24205146137845671960404951367973126079846841720950253188958307150118432418214846820053570479860148888275679572017055228784839023194720978336599109240972498083447488081507397420018501722328902801923849138490671610127953848621733141364829262156152216549507599088529395028133827712271614603960351048586427944329470929936560599503440853063493702588420036201462372013731827419167255436398639887446271044777977943965341883754435743141787156006221108291560381929847798299508146365771418096931814195580428266086508207786974926709106342917517325597245402440983407277644031702767710482222148758159355558245974621095070385763549");
        // const sign = bigInt("18928545496959756512579438348223103860103247450097569223971486743312798156950374943336714741350742176674694049986481729075548718599712271054643150030165230392897481507710187505775911256946250999396358633095137650326818007610162375520522758780751710735664264200260854016867498935206556916247099180950775474524799944404833222133011134000549939512938205188018503377612813102061504146765520561811620128786062447005833886367575841545493555268747671930923697279690399480501746857825917608323993022396398648205737336204493624060285359455268389160802763426461171262704764369336704988874821898000892148693988241020931055723252");
        const sign = bigInt("16268298665306352781766060974246642730290537458484062140616278179123093385061591187916405559107149765775517870785087235302548807055839623307955047534748614104750098448463968100751326761647302849322833075333822527524425950255508948188753978937638403216862753305006859558525436418640864376655029229826093613929648238178772816146643290656323481056285188594620659228128420546410370999261618217844247826721103393877101710714227242842220812309404039005542326887465211684133497858869811795977831602561940508572999243903889317285714362760367592528304349265623616713747431659173341054919397522131545016950662621152416127678144");
        // hashed data. decimal
        const hashed = bigInt("21077529733381499077856708398480108394121479293462181958774129935501641893132");

        const input = Object.assign({},
            splitToWords(sign, 64, 32, "sign"),
            splitToWords(exp, 64, 32, "exp"),
            splitToWords(modulus, 64, 32, "modulus"),
            splitToWords(hashed, 64, 4, "hashed"),
        );

        const witness = rsa_pkvs1v15_circuit.calculateWitness(input);
    });

    it("2048 bits public key. correct sign. 2", () => {
         // public key params. decimal
        const modulus = bigInt("24226501697440012621102249466312043787685293040734225606346036389705515508545746221669035424138747582133889500686654172873671086178893587422987328751464627501601101326475761646014534358699943642495332701081302954020983110372109611581202820849485662540890985814355975252780310958088652613376767040069489530039075302709233494829280591680666351811024913107949144932224439129715181798714328219977771472462901856297952813239115577652450722815852332547886777292613005505949100406231716599634852632308325816916535875123863510650526931916871614411907700873376659841257216885666098127478325534982891697988739616416855214839339");
        const exp = bigInt(65537);
        // signature. decimal
        const sign = bigInt("18928545496959757512579438348223103860103247450097569223971486743312798156950374943336714741350742176674694049986481729075548718599712271054643150030165230392897481507710187505775911256946250999396358633095137650326818007610162375520522758780751710735664264200260854016867498935206556916247099180950775474524799944404833222133011134000549939512938205188018503377612813102061504146765520561811620128786062447005833886367575841545493555268747671930923697279690399480501746857825917608323993022396398648205737336204493624060285359455268389160802763426461171262704764369336704988874821898000892148693988241020931055723252");
        // hashed data. decimal
        const hashed = bigInt("83814198383102558219731078260892729932246618004265700685467928187377105751529");

        const input = Object.assign({},
            splitToWords(sign, 64, 32, "sign"),
            splitToWords(exp, 64, 32, "exp"),
            splitToWords(modulus, 64, 32, "modulus"),
            splitToWords(hashed, 64, 4, "hashed"),
        );

        const witness = rsa_pkvs1v15_circuit.calculateWitness(input);
    });

    it("2048 bits public key. uncorrect sign. ", () => {
        // public key params. decimal
        const modulus = bigInt("24226501697440012621102249466312043787685293040734225606346036389705515508545746221669035424138747582133889500686654172873671086178893587422987328751464627501601101326475761646014534358699943642495332701081302954020983110372109611581202820849485662540890985814355975252780310958088652613376767040069489530039075302709233494829280591680666351811024913107949144932224439129715181798714328219977771472462901856297952813239115577652450722815852332547886777292613005505949100406231716599634852632308325816916535875123863510650526931916871614411907700873376659841257216885666098127478325534982891697988739616416855214839339");
        const exp = bigInt(65537);
        // signature. decimal
        const sign = bigInt("18928545496959756512579438348223103860103247450097569223971486743312798156950374943336714741350742176674694049986481729075548718599712271054643150030165230392897481507710187505775911256946250999396358633095137650326818007610162375520522758780751710735664264200260854016867498935206556916247099180950775474524799944404833222133011134000549939512938205188018503377612813102061504146765520561811620128786062447005833886367575841545493555268747671930923697279690399480501746857825917608323993022396398648205737336204493624060285359455268389160802763426461171262704764369336704988874821898000892148693988241020931055723252");
        // hashed data. decimal
        const hashed = bigInt("83814198383102558219731078260892729932246618004265700685467928187377105751529");
        const input = Object.assign({},
            splitToWords(sign, 64, 32, "sign"),
            splitToWords(exp, 64, 32, "exp"),
            splitToWords(modulus, 64, 32, "modulus"),
            splitToWords(hashed, 64, 4, "hashed"),
        );
        
        (function () {
            const witness = rsa_pkvs1v15_circuit.calculateWitness(input);
        }.should.throw());
        
    });
});

