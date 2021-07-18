var i = 1;

for(var i; i < 50; i++)
{
    document.write(i);
    if(i %  2 == 0 )
    {
        document.write("fizz")
    }else{
        document.write("buzz")
    }
    document.write("<br/>")
}