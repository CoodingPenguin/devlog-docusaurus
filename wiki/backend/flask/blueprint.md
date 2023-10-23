---
tags: ["flask", "blueprint"]
last_update:
  date: 2023-10-23
---
# 블루프린트 (Blueprint)

**연산(Operation)의 집합으로 애플리케이션 객체에 등록해서 실행시킬 수 있도록 하는 객체**를 말한다. 결국 애플리케이션 객체처럼 쓸 수 있되 애플리케이션 설정을 공유하기 위해 사용되는 개념이다.
이렇게 블루프린트로 관리하게 되면 큰 애플리케이션 개발 시 각 도메인 별로 관리하기가 좋다. 다만, 애플리케이션 객체 한 번 블루프린트를 등록하면 애플리케이션 실행 도중에 해지할 수 없으니 주의해야 한다.

:::tip 애플리케이션 객체를 여러 개 두면 안 될까?

이렇게 되면 각자 다른 설정값을 가져야 하고 이를 WSGI 계층에서 관리를 해야 한다. 이걸 블루프린트로 관리를 하게 되면 Flask 계층에서 쉽게 관리할 수 있고 설정값을 따로 관리하지 않고 공유할 수 있다.

:::

## 블루프린트 클래스
```python
class flask.Blueprint(
    name, import_name, static_folder=None, static_url_path=None,
    template_folder=None, url_prefix=None, subdomain=None, url_defaults=None,
    root_path=None, cli_group=<object object>)
```

- `name`_(str)_ : 블루프린트 이름으로, 각 엔드포인트 이름 앞에 접두사로 추가된다.
- `import_name`_(str)_ : 블루프린트 패키지 이름으로, 블루프린트의 `root_path`를 찾는데 사용한다. 보통 여기에 `__name__`을 사용한다.
- `static_folder`_(Optional[Union[str,os.PathLike]])_ : 정적 파일을 저장된 폴더로, 폴더 경로는 `root_path`를 기준으로 하는 상대 경로이다. 기본적으로 블루프린트의 정적 파일은 비활성화되어 있다.
- `static_url_path`_(Optional[str])_ : 정적 파일을 제공할 URL이다. 기본값은 `static_folder`이다.
- `template_folder`_(Optional[str])_ : 템플릿이 저장된 폴더로, `static_folder`의 동작과 비슷한다. 앱의 템플릿 폴더에 있는 템플릿보다 우선순위가 낫다.
- `url_prefix`_(Optional[str])_ : 모든 블루프린트 URL에 추가할 접두사이다.
- `subdomain`_(Optional[str])_ : 하위 도메인으로, 기본적으로 블루프린트 경로와 일치한다.
- `root_path`_Optional[str])_ : 기본적으로 `import_name`을 기준으로 경로를 자동으로 설정한다. 특정 상황에서 실패할 수 있으므로 수동으로도 설정이 가능하다.

## 블루프린트 생성 및 등록
블루프린트 객체는 `Blueprint` 클래스를 사용해 객체를 생성하고, `@bp.route` 데코레이터로 View 함수를 등록한다.

```python showLineNumbers
from flask import Blueprint

auth_bp = Blueprint("auth", __name__, url_prefix="auth")

@auth_bp.route("/<str:account_id>", methods=["GET"])
def get_account_id(account_id):
	pass
```

그리고 애플리케이션 객체에서 `app.register_blueprint`를 사용해 블루프린트를 등록한다.

```python showLineNumbers
from flask import Flask
from auth import auth_bp

app = Flask(__name__)
app.register_blueprint(auth_bp)
```

## 그외 블루프린트 팁

### 블루프린트 재사용

생성한 블루프린트는 앱에 여러 번 등록해 재사용이 가능하다. 예를 들어, `/auth` 와 `/new_auth` URL에 두 번 등록 가능하다.

```python showLineNumbers
from flask import Flask
from auth import auth_bp

app = Flask(__name__)
app.register_blueprint(auth_bp, url_prefix="/auth")
app.register_blueprint(auth_bp, url_prefix="/new_auth")
```

### 중첩 블루프린트

블루프린트의 중첩이 가능하다.

```python showLineNumbers
from flask import Flask

app = Flask(__name__)
parent = Blueprint('parent', __name__, url_prefix='/parent')
child = Blueprint('child', __name__, url_prefix='/child')
parent.register_blueprint(child)
app.register_blueprint(parent)
```

### 에러 핸들러 등록

애플리케이션 객체와 동일하게 블루프린트에도 에러 핸들러 등록이 가능하다.

```python showLineNumbers
@auth_app.errorhandler(404)
@auth_app.errorhandler(405)
def _handle_api_error(ex):
    if request.path.startswith('/api/'):
        return jsonify(error=str(ex)), ex.code
    else:
        return ex
```

:::caution 블루프린트 에러 핸들러 주의사항

404와 405 예외를 처리하는 데 있어서 주의가 필요하다. **유효하지 않은 URL에 대해 404, 405 에러가 발생하지 않는다.** 왜냐하면 블루프린트가 특정 URL 공간을 가지고 있지 않기 때문에 유효하지 않은 URL일 때 어떤 블루프린트의 에러 핸들러를 실행해야 할지 모르기 때문이다.

:::

## 참고 자료
- [Use a Flask Blueprint to Architect Your Applications | RealPython](https://realpython.com/flask-blueprint/)
- [Modular Applications with Blueprints | Flask Documenation](https://flask.palletsprojects.com/en/3.0.x/blueprints/)
- [Blueprint Objects | Flask Documentation](https://flask.palletsprojects.com/en/2.0.x/api/#blueprint-objects)