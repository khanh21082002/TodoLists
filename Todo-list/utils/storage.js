const TODOS_STORAGR_KEY = 'TODOS';

export default {
    get(){
        return JSON.parse(localStorage.getItem(TODOS_STORAGR_KEY) || '[]');
    },
    set(todos){
        localStorage.setItem(TODOS_STORAGR_KEY, JSON.stringify(todos));
    }
}