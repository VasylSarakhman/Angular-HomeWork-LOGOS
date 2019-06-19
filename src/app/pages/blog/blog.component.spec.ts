import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BlogComponent } from './blog.component';

describe('BlogComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BlogComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BlogComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'HomeWork02'`, () => {
    const fixture = TestBed.createComponent(BlogComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('HomeWork02');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(BlogComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to HomeWork02!');
  });
});
