async function func() {
    return await Promise.resolve('Promise has resolved');
}

func().then(console.log);

class Util {
    static ID = 'ID123QWE';
}

console.log(Util.ID);