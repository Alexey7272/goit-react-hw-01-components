export default function Datacleaner( data ) {

  let uniqueLabels = [];

  let cleanData = data.reduce( ( accum, curritem, index, array ) => {
    if ( !uniqueLabels.includes( curritem.label ) ) {
      uniqueLabels.push( curritem.label );
      accum = accum.concat( curritem );
    }  

    else  {
      let elToUpdate = accum.findIndex( ( item ) => item.label === curritem.label );
      accum[ elToUpdate ].percentage = accum[ elToUpdate ].percentage + curritem.percentage;
    };
    return accum;       
  }, [] );
  return cleanData;
};