import { TestBed } from '@angular/core/testing';
import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
    await render(AppComponent);
  });

  it(`should have the 'testing-library-ng19' title`, async () => {
    expect(screen.getByText('Hello, testing-library-ng19')).toBeVisible();
  });
});
