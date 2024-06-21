import { useNavigate } from 'react-router-dom';
import { LogOutBtn } from '../../auth/components';
import { Button } from 'primereact/button';
import { MegaMenu } from 'primereact/megamenu';
import { Ripple } from 'primereact/ripple';

export const Header = () => {
  const navigate = useNavigate();

  const itemRenderer = (item, options) => {
    const handleClick = e => {
      e.preventDefault();
      if (item.route) {
        navigate(item.route);
      }
    };

    if (item.root) {
      return (
        <a
          className='flex align-items-center cursor-pointer px-3 py-2 overflow-hidden relative font-semibold text-lg uppercase p-ripple hover:surface-ground'
          style={{ borderRadius: '2rem' }}
          onClick={handleClick}
        >
          <span className={item.icon} />
          <span className='ml-2'>{item.label}</span>
          <Ripple />
        </a>
      );
    } else if (!item.image) {
      return (
        <a
          className='flex align-items-center p-3 cursor-pointer mb-2 gap-2'
          onClick={handleClick}
        >
          <span className='inline-flex align-items-center justify-content-center border-circle bg-primary w-3rem h-3rem'>
            <i className={`${item.icon} text-lg`}></i>
          </span>
          <span className='inline-flex flex-column gap-1'>
            <span className='font-medium text-lg text-900'>{item.label}</span>
            <span className='white-space-nowrap'>{item.subtext}</span>
          </span>
        </a>
      );
    } else {
      return (
        <div
          className='flex flex-column align-items-start gap-3'
          onClick={handleClick}
        >
          <img alt='megamenu-demo' src={item.image} className='w-full' />
          <span>{item.subtext}</span>
          <Button
            className='p-button p-component p-button-outlined'
            label={item.label}
          />
        </div>
      );
    }
  };

  const items = [
    {
      label: 'Lideres y Administradores',
      root: true,
      template: itemRenderer,
      route: '/admin/managers',
    },
    {
      label: 'Colaboradores',
      root: true,
      template: itemRenderer,
      route: '/admin/employees',
    },
  ];

  return (
    <div className='card'>
      <MegaMenu
        model={items}
        orientation='horizontal'
        end={<LogOutBtn />}
        breakpoint='960px'
        className='p-3 surface-0 shadow-2'
      />
    </div>
  );
};
