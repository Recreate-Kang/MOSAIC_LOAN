package com.mosaic.auth.service;

import com.mosaic.auth.domain.Member;
import com.mosaic.auth.dto.KakaoMemberResponse;

import jakarta.servlet.http.HttpServletResponse;

public interface MemberService {
	Member findOrCreateMember(KakaoMemberResponse kakaoMemberResponse);

	void logout(HttpServletResponse response, String accessToken);
}
