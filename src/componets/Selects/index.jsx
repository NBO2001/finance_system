import Select from "react-select";
   
   const colourStyles = {
     control: styles => ({ ...styles, backgroundColor: '#f5f6fa' }),
     option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          const color = "#FF640A";
          return {
            ...styles,
            backgroundColor: isDisabled
             ? null : isSelected    
             ?"#00FF83": isFocused
             ? color : null,
          color: isDisabled 
            ? '#ccc' : isSelected
            ?  "#ffff" : "#141313",
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          };
        },
   
   };


const Selects = ({defaultValue,options, onChange}) => {
     return (
          <Select 
          defaultValue={defaultValue}
          styles={colourStyles}
          onChange={onChange} options={options} />
     )
}

export default Selects;