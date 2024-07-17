'use client'
import { useCodeStore } from '@/store';
import './style.scss'
export default function CodeNumber() {
  const { code } = useCodeStore();
  return <div className='codenumber'>
    {code.split('\n').map((i, n) => <span key={n}>{n + 1}</span>)}
  </div>
}