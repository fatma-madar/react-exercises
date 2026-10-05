import { useState, useEffect } from 'react';

export function  useLocalStorage(key, initialValue){
    const [value, setValue] = useState(() => {
     try{
        // قراءة القيمة المحفوظة من localStorage
        const stored = localStorage.getItem(key);
        //تحويل النص الى كائن JavaScript وإرجاعه أو إرجاع القيمة الأولية إذا لم تكن موجودة
        return stored ?JSON.parse(stored) : initialValue; 
     }
     catch(error){
        console.error('خطأ في قراءة localStorage:', error);
        return initialValue;
     }
    });

    //حفظ القيمة في localStorage عند كل تغيير
    useEffect(() =>{
        try{
            //يحول الكائن الى نص , لأن localStorage يمكنه تخزين النصوص فقط
             localStorage.setItem(key, JSON.stringify(value));
        }catch(error){
            console.error('خطأ في كتابة localStorage:', error);``
        }
    },[key, value]);
//ارجاع مصفوفة التي تحتوي على القيمة الحالية ودالة لتحديثها
    return [value, setValue];
}