const commands = [
    {in: 'ls', out: `<br />total 1<br />-rw-r--r-- 1 christoph christoph 171 ${datestring} hello_world<br /><br />`},
    {in: 'chmod +x hello_world', out: '<br />'},
    {in: './hello_world', out: '<br />Hello, World. My name is Christoph Schild and I\'m a Software Developer from Tempe, AZ.<br /><br /> \
        Please select one of the following to continue:<br /> \
        <a target="_BLANK" href=\'christoph_schild_resume_2021.pdf\'>Resume</a>&nbsp; \
        <a target="_BLANK" href=\'https://linkedin.com/in/germanator\'>Linkedin</a>&nbsp; \
        <a target="_BLANK" href=\'https://github.com/the-germanator\'>Github</a><br /><br />'},
    {in: '', out: ''},
]