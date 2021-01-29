
const Form = () => {
    return (  
        <form name='contact v1' method='post'>
            <input type="hidden" name='form-name' value='contact v1'/> <br/>
            <input type="text" name='first-name'  placeholder='first-name'/> <br/>
            <input type="text" name='email' placeholder='Email'/> <br/>
            <textarea name="message" id="" cols="30" rows="10"></textarea>
            <button type='submit'>Send Message</button>
        </form>
    );
}
 
export default Form;