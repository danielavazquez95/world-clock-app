export const theme = {
    container: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 10,
      marginRight: 'auto',
      marginLeft: 'auto'
    },
    input: {
      width: 330,
      height: 50,
      padding: '10px 20px',
      fontWeight: 300,
      fontSize: 16,
      border: '1px solid #aaa',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
    },
    inputOpen: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    },
    suggestionsContainer: {
      display: 'none'
    },
    suggestionsContainerOpen: {
      display: 'block',
      position: 'absolute',
      top: 51,
      width: 330,
      border: '1px solid #aaa',
      backgroundColor: '#fff',
      fontWeight: 300,
      fontSize: 16,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      zIndex: 2
    },
    suggestionsList: {
      
      padding: 0,
      listStyleType: 'none',
    },
    suggestion: {
      cursor: 'pointer',
      padding: '10px 20px'
    },
    suggestionHighlighted: {
      backgroundColor: '#ddd'
    }
  };