import variables from "./HomeTemplate.module.scss"  ;  

const HomeTemplate:React.FC<{children?: React.ReactNode}> = ({children}) =>{
    
    return (
      <>
      <div> 
        mahameho and 3amorty
        {children}
      </div>
      </>
    );
  }

export default HomeTemplate;