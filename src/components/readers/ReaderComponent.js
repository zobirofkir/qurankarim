import React from 'react'

const ReaderComponent = () => {
    const names = ['أحمد التويجري', 'محمد الشريف', 'سعيد بن عبد الله', 'يوسف الصادق', 'علي بن محمد', 'عبد الله الفاسي', 'إبراهيم الحسين', 'خالد العتيبي', 'ناصر الزهراني', 'حسن الشمري', 'فهد الجهني', 'سلمان بن فهد', 'تركي السبيعي', 'محمود الحربي', 'أحمد السلمي', 'عبد الرحمن القحطاني', 'علي الدوسري', 'محمد الهاجري', 'سامي بن عبد الله', 'رياض القحطاني'];

  return (
    <div className='container bg-gray-100'>
        <div className='flex flex-row gap-4 my-2 overflow-x-auto px-2'>
            {names.map((name, index) => (
                <div key={index} className='bg-gray-200 px-4 py-2 rounded-md mb-4 font-bold'>
                    <h1 className='whitespace-nowrap text-center'>{name}</h1>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ReaderComponent
