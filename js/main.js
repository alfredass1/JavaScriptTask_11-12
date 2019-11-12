let knygos =

[
    {
       'grozine': [
      
            {
                ISBN: '9786098120463',
                leidimoMetai: '2018',
                pavadinimas: 'fgfgfgfgf',       
                puslapiuSkaicius: '220'
            }   kaina: '3,57' 
            ,
            {
                ISBN: '9771392155005',
                leidimoMetai: '2019',
                pavadinimas: 'dddgdgdg',
                puslapiuSkaicius: '200'
                kaina: '3,20' 
            }
            ,
            {
                ISBN: '9786094674044',
                leidimoMetai: '2016',
                pavadinimas: 'gfdgfgfgf',
                puslapiuSkaicius: '350'
            }
            ,
            {
                ISBN: '9786094664373',
                leidimoMetai: '2017',
                pavadinimas: 'fgfgfgfgf',
                puslapiuSkaicius: '200'
            }
        ]
    },
    {
       'fantastika': [
                  
            {
                ISBN: '9786094273902',
                leidimoMetai: '2019',
                pavadinimas: 'fgfgkk',
                puslapiuSkaicius: '470'
            }
            ,
            {
                ISBN: '9786094273872',
                leidimoMetai: '2019',
                pavadinimas: 'jjjjkkj',
                puslapiuSkaicius: '318'
            }
            ,
            {
                ISBN: '9789955138303',
                leidimoMetai: '2019',
                pavadinimas: 'edetghtgh',
                puslapiuSkaicius: '315'
            }
            ,
            {
                ISBN: '9786090135631',
                leidimoMetai: '2019',
                pavadinimas: 'hhghghg',
                puslapiuSkaicius: '320'
              }
            ]
        },
        {

         'detektyvai': [
           
              {
                  ISBN: '9786090138823',
                  leidimoMetai:'2019' ,
                  pavadinimas: 'jjjjjjj',
                  puslapiuSkaicius: '464'
              }
              ,
              {
                  ISBN: '9789955138556',
                  leidimoMetai: '2019',
                  pavadinimas: 'gfhhghgh',
                  puslapiuSkaicius: '480'
              }
              ,
              {
                  ISBN: '9789955267065',
                  leidimoMetai: '2019',
                  pavadinimas: 'jyjjuyjuu',
                  puslapiuSkaicius: '408'
              }
              ,
              {
                  ISBN: '9786094443046',
                  leidimoMetai: '2018',
                  pavadinimas: 'hgjyjyjy',
                  puslapiuSkaicius: '320'
              }
          ]
      }
  ]
  
for(kategorija of knygos){
  for(duomenys in kategorija){
    for(apie in duomenys){
      for(savybe in kategorija[duomenys][apie]){
        if(savybe == 'leidimoMetai'){
          if(kategorija[duomenys][apie][savybe] == 2018){
            for(atsakymas in kategorija[duomenys][apie]){
              console.log(atsakymas + " : " + kategorija[duomenys][apie][atsakymas])
            }
          }
        }
      }
    }
  }
}