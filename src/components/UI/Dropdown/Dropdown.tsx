import './Dropdown.css';
import React from 'react';
import { IDropdownProps } from '../../../interfaces/IDropdownProps';
import IconChevron from '../Icon/IconChevron/IconChevron';

class Dropdown extends React.Component<IDropdownProps, { isOpen: boolean; value: string }> {
  private options: string[];
  constructor(props: IDropdownProps) {
    super(props);
    this.options = ['Rome', 'Milan', 'Turin', 'Palermo', 'Florence'];
    this.state = { isOpen: false, value: '' };
    this.onButtonClickHandler = this.onButtonClickHandler.bind(this);
    this.onOptionClickHandler = this.onOptionClickHandler.bind(this);
  }

  onButtonClickHandler() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  onOptionClickHandler(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = event.target as HTMLDivElement;
    let v = '';
    if (target.textContent !== null) v = target.textContent;
    this.setState({ value: v });
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <div className={this.state.isOpen ? 'dropdown dropdown_opened' : 'dropdown'}>
        <input
          className="dropdown__field"
          name={this.props.name}
          ref={this.props.forwardedRef}
          value={this.state.value}
          readOnly={true}
        />
        <div className="dropdown__button" onClick={this.onButtonClickHandler}>
          {this.state.value === '' ? 'Choose city' : this.state.value}
          <IconChevron />
        </div>
        {this.state.isOpen && (
          <div className="dropdown__options">
            {this.options.map((item, index) => (
              <div key={index} className="dropdown__option" onClick={this.onOptionClickHandler}>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default React.forwardRef<HTMLInputElement, IDropdownProps>((props, ref) => (
  <Dropdown forwardedRef={ref} {...props} />
));
